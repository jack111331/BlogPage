import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../../components/navbar"
import Seo from "../../components/seo"

const BlogPostTemplate = ({ data, children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <title>{data.mdx.frontmatter.title}</title>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </div>   
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
}
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPostTemplate;