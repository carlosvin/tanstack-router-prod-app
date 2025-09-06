import { createFileRoute, Outlet } from "@tanstack/react-router"
import { BookEntry } from "@/components/BookEntry"
import { PaginatorButtons } from "@/components/Paginator"
import { Search } from "@/components/Search"
import { BookSchemaRequest } from "@/schemas/bookRequest"
import { fetchBooks } from "@/services/api/books"

export const Route = createFileRoute("/books")({
  validateSearch: BookSchemaRequest,
  loaderDeps: ({ search: { search, page } }) => ({ search, page }),
  loader: async ({ deps: { search, page } }) => fetchBooks({ search, page }),
  component: App,
  errorComponent: ({ error }) => (
    <mark>
      There was an error: <code>{error.message}</code>
    </mark>
  ),
})

function App() {
  const { results, count } = Route.useLoaderData()
  const { search, page } = Route.useSearch()
  const navigate = Route.useNavigate()

  function handlePageChange(page: number): void {
    navigate({ search: (prev) => ({ ...prev, page }) })
  }

  return (
    <>
      <Search
        onChange={(search) =>
          navigate({ search: (prev) => ({ ...prev, search, page: 1 }) })
        }
        defaultValue={search}
      />
      <ol>
        {results.map((book) => (
          <li key={book.id}>
            <BookEntry {...book} />
          </li>
        ))}
      </ol>
      <Outlet />
      <PaginatorButtons
        totalItems={count}
        currentPage={page || 1}
        perPage={32}
        onPageChange={handlePageChange}
      />
    </>
  )
}
