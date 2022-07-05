declare type AlignText = "left" | "right" | "center";
export declare type StatefulRadioFieldBlueprint = {
    type: "stateful-radio";
    name: string;
    testName?: string;
    description?: string;
    label: string;
    options: string[];
    initialValue: string;
    dependentChildren: (FormFieldInput | undefined)[][];
    showOnMobileTable?: boolean;
};
declare type HiddenFieldBlueprint = {
    type: "hidden";
    label?: string;
    name: string;
    initialValue: string;
};
export declare type RadioFieldBlueprint = {
    type: "radio";
    testName?: string;
    name: string;
    description?: string;
    label: string;
    options: string[];
    initialValue: string;
    showOnMobileTable?: boolean;
    tableFlex?: number;
    alignText?: AlignText;
};
export declare type CheckboxBlueprint = {
    testName?: string;
    type: "checkbox";
    name: string;
    label: string;
    value: string;
    initialValue?: string;
    showOnMobileTable?: boolean;
    tableFlex?: number;
    alignText?: AlignText;
};
export declare type CheckboxGroupBlueprint = {
    type: "checkbox-group";
    name: string;
    label: string;
    description?: string;
    checkboxes: CheckboxBlueprint[];
    showOnMobileTable?: boolean;
};
export declare type ExpandableListBlueprint = {
    type: "expandable-list";
    name: string;
    label?: string;
    description?: string;
    listItemStructure: FormFieldInput[];
    initialValue: any[];
    addItemLabel: string;
    editItemLabel: string;
    addOrEditItemModalLabel: string;
};
export declare type TextFieldBlueprint = {
    testName?: string;
    type: "text" | "textarea" | "password" | "email";
    description?: string;
    name: string;
    label: string;
    required?: boolean;
    placeholder?: string;
    initialValue?: string;
    validation: {
        browserPattern?: string;
        browserMessage?: string;
        patterns: string[];
        messages: string[];
    };
    showOnMobileTable?: boolean;
    tableFlex?: number;
    alignText?: AlignText;
};
export declare type FormFieldInput = StatefulRadioFieldBlueprint | RadioFieldBlueprint | TextFieldBlueprint | CheckboxBlueprint | HiddenFieldBlueprint | CheckboxGroupBlueprint | ExpandableListBlueprint;
export declare type FormStage = {
    stageTitle?: string;
    fields: FormFieldInput[];
    nextButtonText?: string;
    backButtonText?: string;
};
export declare type FormBlueprint = FormStage[];
export {};
//# sourceMappingURL=types.d.ts.map