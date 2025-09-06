import { type } from "arktype"
import { PersonSchema } from "./person"

export const BookSchema = type({
  id: "number",
  title: "string",
  authors: PersonSchema.array(),
  summaries: "string[]",
})

export type Book = typeof BookSchema.infer
