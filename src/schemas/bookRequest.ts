import { type } from "arktype"

export const BookSchemaRequest = type({
  "search?": "string",
  "page?": "number",
})

export type BookRequest = typeof BookSchemaRequest.infer
