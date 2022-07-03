import type { FormEvent } from "react";
export declare function createFieldLabel(fieldName: string): string;
export declare function onChange({ e, fieldValidation, setFieldErrors, fieldErrors, }: {
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>;
    setFieldErrors: any;
    fieldErrors: string[];
    fieldValidation: {
        patterns: string[];
        messages: string[];
    };
}): void;
export declare function useFormField({ fieldBlueprint, fieldContext, }: {
    fieldBlueprint: {
        name: string;
        type: string;
        initialValue?: string;
    };
    fieldContext: {
        value?: string;
        errors: string[];
    };
}): {
    fieldErrors: string[];
    fieldVisited: boolean;
    setFieldErrors: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    setFieldVisited: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    defaultValue: string;
};
//# sourceMappingURL=logic.d.ts.map