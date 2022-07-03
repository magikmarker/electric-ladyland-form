import type { FormFieldInput, MultiStepForm } from "../../types";
export declare function addFormValuesToContext({ formType, formBlueprint, body, context, }: {
    formType: "multipart";
    context: any;
    formBlueprint: MultiStepForm;
    body: FormData;
} | {
    formType: "basic";
    context: any;
    formBlueprint: FormFieldInput[];
    body: FormData;
}): any;
//# sourceMappingURL=add-form-values-to-context.d.ts.map