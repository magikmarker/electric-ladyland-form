import type { FormFieldInput, MultiStepForm } from "../types";
export declare function formLoaderFunction({ basicOrMultipart, request, formBlueprint, }: {
    basicOrMultipart: "multipart";
    request: Request;
    formBlueprint: MultiStepForm;
} | {
    basicOrMultipart: "basic";
    request: Request;
    formBlueprint: FormFieldInput[];
}): Promise<any>;
//# sourceMappingURL=index.d.ts.map