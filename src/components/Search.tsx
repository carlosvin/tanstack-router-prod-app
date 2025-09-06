import { debounce } from "@tanstack/pacer"

interface SearchProps {
  onChange: (search?: string) => void
  defaultValue?: string
}

export function Search({ defaultValue, onChange }: SearchProps) {
  const debouncedSearch = debounce(
    (searchTerm?: string) => onChange(searchTerm),
    {
      wait: 500, // Wait 500ms after last keystroke
    },
  )

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    debouncedSearch(value.length > 0 ? value : undefined)
  }
  return (
    <input
      name="search"
      type="search"
      placeholder="Search books"
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  )
}
