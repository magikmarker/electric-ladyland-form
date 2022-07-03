import type { FormFieldInput, MultiStepForm } from "../types";
export declare function formLoaderFunction({ basicOrMultipart, request, formBlueprint, formUtilitiesFromRemixApp, }: {
    basicOrMultipart: "multipart";
    request: Request;
    formBlueprint: MultiStepForm;
    formUtilitiesFromRemixApp: {
        commitSession: any;
        getSession: any;
        destroySession: any;
    };
} | {
    basicOrMultipart: "basic";
    request: Request;
    formBlueprint: FormFieldInput[];
    formUtilitiesFromRemixApp: {
        commitSession: any;
        getSession: any;
        destroySession: any;
    };
}): Promise<any>;
//# sourceMappingURL=index.d.ts.map