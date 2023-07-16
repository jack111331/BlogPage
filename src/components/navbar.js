import * as React from "react"
import { Link } from "gatsby"
import { title, container, navLinks, navLinkItem } from "./navbar.module.css"

const Navbar = (prop) => {
    return (
        <div className={container}>
            <ul className={navLinks}>
                <Link to='/' className={navLinkItem}>Home</Link>

                <Link to='/portfolio' className={navLinkItem}>Portfolio</Link>

                <Link to='/publication' className={navLinkItem}>Publication</Link>

                <Link to='/blog' className={navLinkItem}>Blog</Link>

            </ul>
        </div>
    )
}

// export default IndexPage
export default Navbar