import { getPageNumbers } from "@/services/pagination"

interface PaginatorProps {
  totalItems: number
  currentPage: number
  perPage: number
  onPageChange: (page: number) => void
}

export function PaginatorButtons({
  totalItems,
  currentPage,
  perPage,
  onPageChange,
}: PaginatorProps) {
  return (
    <div role="group">
      {getPageNumbers({ totalItems, currentPage, perPage }).map(
        ({ page, text, isDisabled }) => (
          <button
            key={`paginator-${text}-${page}`}
            onClick={() => onPageChange(page)}
            disabled={isDisabled}
            type="button"
            className="outline"
          >
            {text} <small>({page})</small>
          </button>
        ),
      )}
    </div>
  )
}
