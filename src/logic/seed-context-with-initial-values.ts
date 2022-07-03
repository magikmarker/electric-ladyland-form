import type { FormFieldInput, MultiStepForm } from "../../types";

function seedContextWithInitialValues({
  basicOrMultipart,
  formBlueprint,
}: {
  basicOrMultipart: "multipart";
  formBlueprint: MultiStepForm;
}): any;
function seedContextWithInitialValues({
  basicOrMultipart,
  formBlueprint,
}: {
  basicOrMultipart: "basic";
  formBlueprint: FormFieldInput[];
}): any;
function seedContextWithInitialValues({
  basicOrMultipart,
  formBlueprint,
}: {
  basicOrMultipart: "multipart" | "basic";
  formBlueprint: MultiStepForm | FormFieldInput[];
}): any {
  // Give the context object initial values
  let context: any = {};

  if (basicOrMultipart === "multipart") {
    for (const step of formBlueprint) {
      // console.log({ step });

      // @ts-ignore
      for (const field of step?.fields) {
        // console.log({ field });

        if (field) {
          addFieldToContext({ field, context });
        }
      }
    }

    context.currentStep = 0;
  }

  if (basicOrMultipart === "basic") {
    for (const nestedField of formBlueprint) {
      if (typeof nestedField === "object") {
        // @ts-ignore
        addFieldToContext({ field: nestedField, context });
      }
    }
  }

  return context;
}

function addFieldToContext({
  field,
  context,
}: {
  field: FormFieldInput;
  context: any;
}) {
  if (field.type !== "checkbox-group" && field.type !== "expandable-list") {
    context[`${field.name}`] = {
      value: field.initialValue || "",
      errors: [],
    };
  } else if (field.type === "checkbox-group") {
    field.checkboxes.forEach((checkbox) => {
      if (checkbox.initialValue) {
        context[`${field.name}`] = {
          // @ts-expect-error silly typescript
          value: field.initialValue || "",
          errors: [],
        };
      }
    });
  } else if (field.type === "expandable-list") {
    context[`${field.name}`] = {
      value: field.initialValue || [],
      errors: [],
    };
  }

  // console.log("adding field context: ", context);

  if (field.type === "stateful-radio") {
    field.dependentChildren.forEach((fields) => {
      fields.forEach((nestedField) => {
        if (typeof nestedField !== "undefined") {
          addFieldToContext({ field: nestedField, context });
        }
      });
    });
  }
}

export { seedContextWithInitialValues };
