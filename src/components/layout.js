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
      <div className="site-shell">
        <main>{children}</main>
      </div>
      <footer className="site-footer">
        <Link to="/" className="homepage">Back to Homepage</Link>
        <br /><br />
<a href="https://drive.google.com/file/d/1dyTImWR_JS4Mz14bGX3n0iVab7pcVPBR/view?usp=sharing" target="_blank" rel="noreferrer">Download logo</a>
  <div className="socials">
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
</div>

          © {new Date().getFullYear()} &middot; Abhoria
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
