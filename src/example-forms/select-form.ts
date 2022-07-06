import type { FormBlueprint } from "electric-ladyland-form/dist/types";

export const selectFormBlueprint: FormBlueprint = [
  {
    fields: [
      {
        type: "select",
        name: "is-commercial-client",
        label: "Commercial Client?",
        options: ["no", "yes", "maybe"],
        initialValue: "maybe",
      },
    ],
  },
];
