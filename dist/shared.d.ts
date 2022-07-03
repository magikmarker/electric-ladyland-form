import type { MultiStepForm } from "./types";
export declare function getFormStage({ context, formBlueprint, }: {
    context: any;
    formBlueprint: MultiStepForm;
}): "beginning" | "middle" | "end";
export declare function toBinary(string: string): string;
export declare function fromBinary(binary: string): string;
export declare function convertSingleQuotes(string: string): string;
//# sourceMappingURL=shared.d.ts.map