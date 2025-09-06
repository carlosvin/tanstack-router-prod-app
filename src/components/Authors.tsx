import type { Person } from "@/schemas/person"

interface AuthorsProps {
  authors: Person[]
}

export function Authors({ authors }: AuthorsProps) {
  return (
    <>
      {authors.map((author) => author.name).join(", ") ||
        "No authors available"}
    </>
  )
}
