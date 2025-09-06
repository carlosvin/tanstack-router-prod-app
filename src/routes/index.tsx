import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()
  return (
    <>
      <h2>Welcome to the Book App!</h2>
      <p>
        This is an application to exemplify how to build an web app with
        Tanstack router, following the conventions described in{" "}
        <a
          href="https://carlosvin.github.io/tanstack-router-opinionated-conventions-production-react-apps/"
          target="_blank"
          rel="noreferrer"
        >
          this post
        </a>
        .
      </p>
      <button onClick={() => navigate({ to: "/books" })} type="button">
        Open the Books App
      </button>
    </>
  )
}
