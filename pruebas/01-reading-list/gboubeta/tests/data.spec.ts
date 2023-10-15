import { test, expect } from "vitest";

import { AppDataSchema } from "../src/lib/types.d";
import data from "../books.json";

const validatedData = AppDataSchema.parse(data);

test(`[App]: Should have books`, async () => {
  await expect(validatedData).not.toBeNull();
  await expect(validatedData.library.length).toBeGreaterThan(0);
});