import type { FormFieldInput } from "./types";
import { HiddenField } from "./components/hidden";
import { TextInput } from "./components/text-input";
import { Radio } from "./components/radio";
import { CheckboxGroup } from "./components/checkbox-group";
import { ExpandableList } from "./components/expandable-list";
import { StatefulRadio } from "./components/stateful-radio";
// @ts-expect-error Way of the road bubs
import styles from "./styles.css";

FormField.styles = styles;

function FormField({
  field,
  context,
}: {
  field: FormFieldInput;
  context: any;
}) {
  if (field.type === "hidden") {
    return (
      <HiddenField fieldContext={context[field.name]} fieldBlueprint={field} />
    );
  }

  if (
    field.type === "text" ||
    field.type === "textarea" ||
    field.type === "password" ||
    field.type === "email"
  ) {
    return (
      <div className="el-field-item">
        <TextInput fieldBlueprint={field} fieldContext={context[field.name]} />
      </div>
    );
  }

  if (field.type === "radio") {
    return (
      <div className="el-field-item">
        <Radio fieldBlueprint={field} fieldContext={context[field.name]} />
      </div>
    );
  }

  if (field.type === "checkbox-group") {
    return (
      <div className="el-field-item">
        <CheckboxGroup fieldBlueprint={field} context={context} />
      </div>
    );
  }

  if (field.type === "expandable-list") {
    return (
      <div className="el-field-item">
        <ExpandableList
          fieldBlueprint={field}
          fieldContext={context[field.name]}
        />
      </div>
    );
  }

  if (field.type === "stateful-radio") {
    return (
      <div className="el-field-item">
        <StatefulRadio fieldBlueprint={field} context={context} />
      </div>
    );
  }
  return null;
}

export { FormField, styles as formFieldStyles };
