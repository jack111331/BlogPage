import * as React from "react"
import Navbar from "../components/navbar"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"

const Portfolio = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                id
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <Navbar>Navbar</Navbar>
            <h1>{data.site.siteMetadata.title}</h1>
        </div>
    )
}

// export default IndexPage
export default Portfolio

export const Head = () => <Seo title="Portfolio" />
