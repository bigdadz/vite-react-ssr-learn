import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { PageShell } from './PageShell'
import type { PageContextClient } from './types'

export { render }
export const clientRouting = true

let root: any
async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const container = document.getElementById('page-view')!
  // SPA
  if (container.innerHTML === '' || !pageContext.isHydration) {
    if (!root) {
      root = createRoot(container)
    }
    root.render(page)
    // SSR
  } else {
    root = hydrateRoot(container, page)
  }
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
