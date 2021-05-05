import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
//import Header from "./Header"
import "./layout.css"
import Helmet from "react-helmet"

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#3c6a84" />
        <meta name="theme-color" content="#3c6a84"></meta>
      </Helmet>
      <GlobalStyle />
      {/* <Header /> */}
      <main>{children}</main>
    </>
  )
}

export default Layout
