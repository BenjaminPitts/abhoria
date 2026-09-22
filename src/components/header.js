import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle = `` }) => (
  <header className="site-header">
  <div className="header">
    <Link to="/">
      <StaticImage
      src="../images/abhoria-logo-white.png"
      id='top'
      className="site-logo"
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Abhoria"
/>
    </Link>

    <nav className="nav" aria-label="Primary navigation">
      <Link to="/bio/" className="link">Bio</Link> |
      <Link to="/videos/" className="link"> Videos</Link> |
      <a href="https://abhoria.bandcamp.com/merch" className="link" target="_blank" rel="noreferrer"> Merch</a> |
      <Link to="/press/" className="link"> Press</Link> |
      <Link to="/contact/" className="link"> Contact</Link>
    </nav>

</div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
