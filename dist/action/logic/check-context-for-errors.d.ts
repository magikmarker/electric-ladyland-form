import type { FormFieldInput, MultiStepForm } from "../../types";
export declare function checkContextForErrors({ context, formType, formBlueprint, }: {
    formBlueprint: FormFieldInput[];
    formType: "basic";
    context: any;
} | {
    formBlueprint: MultiStepForm;
    formType: "multipart";
    context: any;
}): boolean;
//# sourceMappingURL=check-context-for-errors.d.ts.map