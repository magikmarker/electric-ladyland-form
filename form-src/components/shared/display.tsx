import type { ReactNode } from "react";
import type {
  CheckboxGroupBlueprint,
  ExpandableListBlueprint,
  RadioFieldBlueprint,
  StatefulRadioFieldBlueprint,
  TextFieldBlueprint,
} from "../../types";

export function FieldLabel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <>
      <span
        className={`el-form-field-label${className ? " " + className : ""}`}
      >
        {children}
      </span>
    </>
  );
}

export function FieldDescription({ children }: { children: ReactNode }) {
  if (children) {
    return <p className="el-form-field-description">{children}</p>;
  }

  return null;
}

export function displayFieldErrors({
  fieldErrors,
  fieldVisited,
}: {
  fieldErrors: string[];
  fieldVisited: boolean;
}) {
  return (
    <>
      {fieldErrors.length >= 1 && fieldVisited
        ? fieldErrors.map((fieldError) => {
            console.log({ fieldError });

            if (fieldErrors.length === 1) {
              return (
                <div className="el-field-error-text" key={fieldError}>
                  {fieldError}
                </div>
              );
            } else {
              return (
                <div className="el-field-error-text" key={fieldError}>
                  - {fieldError}
                </div>
              );
            }
          })
        : null}
    </>
  );
}

export function displayFieldLabelDescriptionError({
  fieldBlueprint,
  fieldErrors,
  fieldVisited,
}: {
  fieldBlueprint:
    | TextFieldBlueprint
    | RadioFieldBlueprint
    | StatefulRadioFieldBlueprint
    | CheckboxGroupBlueprint
    | ExpandableListBlueprint;
  fieldErrors?: string[];
  fieldVisited?: boolean;
}) {
  // fieldErrors = ["Something Very Bad Happened", "Another Bad Thing"];
  // fieldVisited = true;
  return (
    <>
      <label htmlFor={fieldBlueprint.name} key={fieldBlueprint.name}>
        <FieldLabel>{fieldBlueprint.label}</FieldLabel>
      </label>

      <FieldDescription>{fieldBlueprint.description}</FieldDescription>

      {fieldErrors && fieldVisited
        ? displayFieldErrors({ fieldErrors, fieldVisited })
        : null}
    </>
  );
}

export function RadioOrCheckboxWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  // console.log({ className });

  return (
    <>
      <div
        className={`el-radio-or-checkbox-wrapper${
          className ? " " + className : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}

export function RadioOrCheckboxLabel({
  className,
  children,
  htmlFor,
}: {
  className?: string;
  children: ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`el-radio-or-checkbox-label${
        className ? " " + className : ""
      }`}
    >
      {children}
    </label>
  );
}
