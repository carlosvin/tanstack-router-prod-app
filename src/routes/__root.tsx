import {
  createRootRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css",
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const { isLoading } = useRouterState()

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/books"}>Books App</Link>
            </li>
            <li aria-busy={isLoading ? "true" : "false"} />
          </ul>
          <ul>
            <li>
              <a
                href="https://carlosvin.github.io/tanstack-router-opinionated-conventions-production-react-apps/"
                title="Tanstack Router Opinionated Conventions"
              >
                Guidelines
              </a>
            </li>
            <li>
              <span
                data-placement="left"
                data-tooltip="This is an example of how to develop an app with Tanstack Router
              following some opinionated conventions. Click on the link Guidelines to read more."
              >
                ?
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      <footer>
        <TanStackRouterDevtools />
      </footer>
    </div>
  )
}
