interface PageProps {
  page: number
  text: string
  isDisabled?: boolean
}

interface PaginatorProps {
  totalItems: number
  currentPage: number
  perPage: number
}

function getPage(
  text: string,
  page: number,
  currentPage: number,
  lastPage: number,
): PageProps {
  const isDisabled = page < 1 || page > lastPage || page === currentPage
  return { text, page, isDisabled }
}

export function getPageNumbers({
  totalItems,
  currentPage,
  perPage,
}: PaginatorProps): PageProps[] {
  const lastPage = Math.max(1, Math.ceil(totalItems / perPage))
  const currentPageClamped = Math.min(Math.max(1, currentPage), lastPage)
  return [
    getPage("<<", 1, currentPageClamped, lastPage),
    getPage(
      "<",
      Math.max(currentPageClamped - 1, 1),
      currentPageClamped,
      lastPage,
    ),
    getPage("", currentPageClamped, currentPageClamped, lastPage),
    getPage(
      ">",
      Math.min(currentPageClamped + 1, lastPage),
      currentPageClamped,
      lastPage,
    ),
    getPage(">>", lastPage, currentPageClamped, lastPage),
  ]
}
