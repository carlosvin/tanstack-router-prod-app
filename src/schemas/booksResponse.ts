import { type } from "arktype"
import { BookSchema } from "./book"

export const BookSchemaResponse = type({
  count: "number",
  "next?": "string | null",
  "previous?": "string | null",
  results: BookSchema.array(),
})

export type BooksResponse = typeof BookSchemaResponse.infer
