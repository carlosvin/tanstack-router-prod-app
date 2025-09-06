import { Link } from "@tanstack/react-router"
import type { Book } from "@/schemas/book"
import { Authors } from "./Authors"

export function BookEntry({ title, authors, id }: Book) {
  return (
    <span className="container-fluid grid">
      <Link to="/books/$bookId" params={{ bookId: id.toString() }}>
        {title}
      </Link>
      <small>
        <Authors authors={authors} />
      </small>
    </span>
  )
}
