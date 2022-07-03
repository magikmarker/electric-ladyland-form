import type { FormFieldInput, MultiStepForm } from "../types";
import { getSession, commitSession, destroySession } from "../session.server";
import { json } from "@remix-run/node";
import {
  checkForRelevantContext,
  getFormStage,
  seedContextWithInitialValues,
} from "./logic";

export async function formLoaderFunction({
  basicOrMultipart,
  request,
  formBlueprint,
}:
  | {
      basicOrMultipart: "multipart";
      request: Request;
      formBlueprint: MultiStepForm;
    }
  | {
      basicOrMultipart: "basic";
      request: Request;
      formBlueprint: FormFieldInput[];
    }): Promise<any> {
  const session = await getSession(request.headers.get("Cookie"));

  let context = session.get("context");

  // Check to see if the current context matches the current
  // form structure. If it doesn't match, there is a good chance
  // that there is no context or we are coming from a different form
  if (basicOrMultipart === "basic") {
    context = checkForRelevantContext({
      formBlueprint,
      basicOrMultipart,
      context,
    });
  } else {
    context = checkForRelevantContext({
      formBlueprint,
      basicOrMultipart,
      context,
    });
  }

  // If the context object doesn't have any length, we
  // know that it is empty and we need to seed it
  if (Object.keys(context).length < 1) {
    if (basicOrMultipart === "basic") {
      context = seedContextWithInitialValues({
        formBlueprint,
        basicOrMultipart,
      });
    } else {
      context = seedContextWithInitialValues({
        formBlueprint,
        basicOrMultipart,
      });
    }
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
      console.log("You shouldn't be here");

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

  if (basicOrMultipart === "multipart") {
    // console.log({ currentStep: context?.currentStep });

    return {
      context,
      currentStepBlueprint: formBlueprint[context.currentStep]?.fields,
      commitSession,
      session,
    };
  } else {
    return {
      context,
      currentStepBlueprint: formBlueprint,
      commitSession,
      session,
    };
  }
}
