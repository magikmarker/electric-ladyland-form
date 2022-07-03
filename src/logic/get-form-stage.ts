import type { MultiStepForm } from "../../types";

function getFormStage({
  context,
  formBlueprint,
}: {
  context: any;
  formBlueprint: MultiStepForm;
}): "beginning" | "middle" | "end" {
  // What stage of the form are we in
  // Beginning - Middle - End
  const numberOfAvailableSteps = formBlueprint.length;
  let formStage: "beginning" | "middle" | "end" =
    context.currentStep === 0
      ? "beginning"
      : Number(context.currentStep) + 1 === numberOfAvailableSteps
      ? "end"
      : "middle";

  return formStage;
}

export { getFormStage };
