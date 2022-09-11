import React from 'react'
import './code.css'

export { Page }

function Page() {
  console.log("CSR")
  return (
    <>
      <h1>CSR About</h1>
      <p>
        Demo using <code>vite-plugin-ssr</code>.
      </p>
    </>
  )
}
