import type { FormBlueprint } from "electric-ladyland-form";

export const radioFormBlueprint: FormBlueprint = [
  {
    fields: [
      {
        type: "radio",
        name: "is-commercial-client",
        label: "Commercial Client?",
        options: ["no", "yes", "maybe"],
        initialValue: "no",
      },
    ],
    submitText: "Submitter",
  },
];
