import { createFileRoute, useRouter } from "@tanstack/react-router"
import { Authors } from "@/components/Authors"
import { fetchBook } from "@/services/api/books"

export const Route = createFileRoute("/books/$bookId")({
  component: BookComponent,
  loaderDeps: ({ search: { search } }) => ({ search }),
  loader: async ({ parentMatchPromise, params: { bookId } }) => {
    const { loaderData } = await parentMatchPromise

    const book = loaderData?.results.find((b) => b.id === Number(bookId))
    if (!book) {
      return { book: await fetchBook(Number(bookId)) }
    }

    return { book }
  },
})

function BookComponent() {
  const { book } = Route.useLoaderData()
  const router = useRouter()
  return (
    <dialog open>
      <article>
        <header>
          <button
            aria-label="Close"
            rel="prev"
            onClick={() => router.history.back()}
            type="button"
          ></button>
          <hgroup>
            <h2>{book.title}</h2>
            <Authors authors={book.authors} />
          </hgroup>
        </header>
        <p>{book.summaries[0]}</p>
      </article>
    </dialog>
  )
}
