import { type } from "arktype"

export const PersonSchema = type({
  "birth_year?": "number | null",
  "death_year?": "number | null",
  name: "string",
})

export type Person = typeof PersonSchema.infer
