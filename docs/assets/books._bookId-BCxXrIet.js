import { A as n } from "./Authors-9hCc-Qxg.js"
import { j as o, b as s, u as t } from "./index-DxODvHK4.js"
function u() {
  const { book: r } = s.useLoaderData(),
    e = t()
  return o.jsx("dialog", {
    open: !0,
    children: o.jsxs("article", {
      children: [
        o.jsxs("header", {
          children: [
            o.jsx("button", {
              "aria-label": "Close",
              rel: "prev",
              onClick: () => e.history.back(),
              type: "button",
            }),
            o.jsxs("hgroup", {
              children: [
                o.jsx("h2", { children: r.title }),
                o.jsx(n, { authors: r.authors }),
              ],
            }),
          ],
        }),
        o.jsx("p", { children: r.summaries[0] }),
      ],
    }),
  })
}
export { u as component }
//# sourceMappingURL=books._bookId-BCxXrIet.js.map
