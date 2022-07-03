import type { FormFieldInput, MultiStepForm } from "../types";
export declare function formActionFunction({ formType, request, formBlueprint, handleDataFn, successRedirectPath, formUtilitiesFromRemixApp, }: {
    formType: "basic";
    request: Request;
    formBlueprint: FormFieldInput[];
    handleDataFn: any;
    successRedirectPath: string;
    formUtilitiesFromRemixApp: {
        commitSession: any;
        getSession: any;
        destroySession: any;
        redirect: any;
        json: any;
    };
} | {
    formType: "multipart";
    request: Request;
    formBlueprint: MultiStepForm;
    handleDataFn: any;
    successRedirectPath: string;
    formUtilitiesFromRemixApp: {
        commitSession: any;
        getSession: any;
        destroySession: any;
        redirect: any;
        json: any;
    };
}): Promise<any>;
//# sourceMappingURL=index.d.ts.map