import { type } from "arktype"
import { type Book, BookSchema } from "@/schemas/book"
import type { BookRequest } from "@/schemas/bookRequest"
import { BookSchemaResponse, type BooksResponse } from "@/schemas/booksResponse"

function processError<T>(out: type.errors | T): T {
  if (out instanceof type.errors) {
    throw new Error(out.summary)
  }
  return out
}

export async function fetchBooks({
  search,
  page,
}: BookRequest): Promise<BooksResponse> {
  const params = new URLSearchParams()
  if (search) {
    params.append("search", search)
  }
  if (page) {
    params.append("page", page.toString())
  }
  const response = await fetch(`https://gutendex.com/books/?${params}`, {
    cache: "force-cache",
  })
  if (response.ok) {
    const out = BookSchemaResponse(await response.json())
    return processError(out)
  }
  throw new Error(`Failed to fetch books ${response.statusText}`)
}

export async function fetchBook(id: number): Promise<Book> {
  const response = await fetch(`https://gutendex.com/books/${id}`, {
    cache: "force-cache",
  })
  if (response.ok) {
    const out = BookSchema(await response.json())
    return processError(out)
  }
  throw new Error(`Failed to fetch book ${id}: ${response.statusText}`)
}
