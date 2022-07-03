import type { FormFieldInput, MultiStepForm } from "../types";
export declare function formActionFunction({ formType, request, formBlueprint, handleDataFn, successRedirectPath, }: {
    formType: "basic";
    request: Request;
    formBlueprint: FormFieldInput[];
    handleDataFn: any;
    successRedirectPath: string;
} | {
    formType: "multipart";
    request: Request;
    formBlueprint: MultiStepForm;
    handleDataFn: any;
    successRedirectPath: string;
}): Promise<any>;
//# sourceMappingURL=index.d.ts.map