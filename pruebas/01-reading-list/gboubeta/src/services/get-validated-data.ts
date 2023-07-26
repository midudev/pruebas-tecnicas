import { server$ } from "@builder.io/qwik-city";

import data from "../../books.json";

import { AppDataSchema } from "~/lib/types.d";

export const getValidatedData = server$(async () => {
  try {
    // Valida los datos utilizando el esquema
    const validatedData = AppDataSchema.parse(data);
    // console.log("Los datos son válidos:", validatedData);

    return validatedData;
  } catch (error) {
    console.error("Error al validar los datos:", error);
    throw Error("Error al validar los datos");
  }
});
