import type { FormFieldInput, MultiStepForm } from "../types";
declare function seedContextWithInitialValues({ basicOrMultipart, formBlueprint, }: {
    basicOrMultipart: "multipart";
    formBlueprint: MultiStepForm;
}): any;
declare function seedContextWithInitialValues({ basicOrMultipart, formBlueprint, }: {
    basicOrMultipart: "basic";
    formBlueprint: FormFieldInput[];
}): any;
export { seedContextWithInitialValues };
//# sourceMappingURL=seed-context-with-initial-values.d.ts.map