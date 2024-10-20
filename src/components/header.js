import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
  <div class='header'>
    <Link to="/">
      <StaticImage
      src="../images/abhoria-logo-white.png"
      id='top'
      width={400}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Abhoria"
      style={{ margin: `1rem` }}
/>
    </Link>

    <div class='nav'>
    <Link to="/bio/" class='link'> Bio</Link> |
    <Link to='/videos/' class='link'> Videos</Link> |
    <Link to='https://abhoria.bandcamp.com/merch' class='link' target='blank'> Merch</Link> |
    <Link to='/press/' class='link'> Press</Link> |
    <Link to ='/contact/' class='link'> Contact</Link>
</div>

</div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
