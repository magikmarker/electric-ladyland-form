import type { FormBlueprint } from "../types";
import {
  checkForRelevantContext,
  getFormStage,
  seedContextWithInitialValues,
} from "./logic";

export async function formLoaderFunction({
  request,
  formBlueprint,
  formUtilitiesFromRemixApp,
}: {
  request: Request;
  formBlueprint: FormBlueprint;
  formUtilitiesFromRemixApp: {
    commitSession: any;
    getSession: any;
    destroySession: any;
    json: any;
  };
}): Promise<any> {
  // Get the form utilities by spreading the form utilities object
  const { commitSession, getSession, destroySession, json } =
    formUtilitiesFromRemixApp;
  let basicOrMultipart: "basic" | "multipart" = "basic";

  formBlueprint.length > 1
    ? (basicOrMultipart = "multipart")
    : (basicOrMultipart = "basic");

  const session = await getSession(request.headers.get("Cookie"));

  let context = session.get("context");

  // Check to see if the current context matches the current
  // form structure. If it doesn't match, there is a good chance
  // that there is no context or we are coming from a different form
  context = checkForRelevantContext({
    formBlueprint,
    context,
  });

  // If the context object doesn't have any length, we
  // know that it is empty and we need to seed it
  if (Object.keys(context).length < 1) {
    context = seedContextWithInitialValues({
      formBlueprint,
    });
  }

  // Get the current step
  context.currentStep = context?.currentStep ?? 0;

  // We should never have a negative number
  // for the current step
  if (context.currentStep < 0) {
    context.currentStep = 0;
  }

  if (basicOrMultipart === "multipart") {
    let formStage = getFormStage({ context, formBlueprint });

    // console.log({ formStage, context });

    if (context.currentStep > 0 && Object.keys(context).length < 1) {
      //      console.log("You shouldn't be here");

      return json(
        {},
        {
          headers: {
            "Set-Cookie": await destroySession(session),
          },
        }
      );
    }

    context.formStage = formStage;
    // @ts-ignore
    context.nextButtonText = formBlueprint[context.currentStep]?.nextButtonText;
    // @ts-ignore
    context.backButtonText = formBlueprint[context.currentStep]?.backButtonText;
  }

  session.set("context", context);

  // console.log({ currentStep: context?.currentStep });
  return {
    context,
    formStructure: formBlueprint[context.currentStep],
    commitSession,
    session,
  };
}
