// Check for errors in context
// In basic, we want to check all of the context entries
// In multipart, we only want to check the context items

import { FormFieldInput, MultiStepForm } from "../../types";

// for the current step
export function checkContextForErrors({
  context,
  formType,
  formBlueprint,
}:
  | {
      formBlueprint: FormFieldInput[];
      formType: "basic";
      context: any;
    }
  | {
      formBlueprint: MultiStepForm;
      formType: "multipart";
      context: any;
    }): boolean {
  let errorsPresent = false;
  // Basic form
  if (formType === "basic") {
    for (const fieldValue in context) {
      // @ts-ignore
      if (fieldValue?.errors?.length >= 1) {
        errorsPresent = true;
      }

      if (errorsPresent) {
        return true;
      }
    }
  }

  if (formType === "multipart") {
    const currentFormStep = context.currentStep;

    // Using the current form step, get the context fields to
    // check for errors
    // eslint-disable-next-line no-inner-declarations
    function addFieldNameToValidateToArray(
      field: FormFieldInput,
      fieldsToValidate: string[]
    ) {
      fieldsToValidate.push(field.name);

      if (field.type === "stateful-radio") {
        let selectedIndex = field.options.indexOf(
          context[`${field.name}`].value
        );
        field.dependentChildren[selectedIndex].forEach((nestedField) => {
          if (nestedField) {
            fieldsToValidate.push(nestedField.name);
          }
        });
      }
    }
    // We only care about the context values in the current step
    let fieldsToValidate: string[] = [];

    // @ts-ignore
    for (const field of formBlueprint[currentFormStep]?.fields) {
      // console.log({ field });

      if (context) addFieldNameToValidateToArray(field, fieldsToValidate);
    }

    // console.log({ fieldsToValidate });

    for (const fieldToValidate of fieldsToValidate) {
      if (context[`${fieldToValidate}`]?.errors?.length >= 1) {
        errorsPresent = true;
      }

      if (errorsPresent) {
        return true;
      }
    }
  }
  return false;
}
