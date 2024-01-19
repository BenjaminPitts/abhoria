/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            backgroundColor: `black`,
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            padding: `3rem`,
            textAlign: `center`
          }}
        >
        <Link to="/" class='homepage'>Back to Homepage</Link>
        <br /><br />
<a href ='https://drive.google.com/file/d/1dyTImWR_JS4Mz14bGX3n0iVab7pcVPBR/view?usp=sharing' target='_blank'rel="noreferrer" download>Dowload Logo</a>
  <p class='socials'>
  <a href='https://www.facebook.com/AbhoriaMetal' target='_blank' rel="noreferrer">
  <StaticImage
    src="../images/fb-icon.png"
    width={40}
    quality={100}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Abhoria - Facebook"
    style={{ margin: `1rem 2rem` }}
  /></a>
  <a href='https://www.instagram.com/abhoriametal/' target='_blank' rel="noreferrer">
  <StaticImage
    src="../images/ig-icon.png"
    width={40}
    quality={100}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Abhoria - Instagram"
    style={{ margin: `1rem 2rem` }}
  /></a>
  <a href='https://twitter.com/abhoriametal' target='_blank' rel="noreferrer">
  <StaticImage
    src="../images/twitter-icon.png"
    width={40}
    quality={100}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="Abhoria - Twitter"
    style={{ margin: `1rem 2rem` }}
  />
  </a>
</p>

          © {new Date().getFullYear()} &middot; Abhoria
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
