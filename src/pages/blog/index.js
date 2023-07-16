import * as React from "react"
import { Link, graphql } from "gatsby"
import Navbar from "../../components/navbar"
import Seo from "../../components/seo"

const BlogPage = ({data}) => {
    return (
        <div>
            <Navbar></Navbar>
            <p>My cool blog post goes here.</p>
            <ul>
                {
                    data.allMdx.nodes.map(node => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.frontmatter.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>{node.excerpt}</p>
                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
            </ul>
        </div>
    )
}

export const query = graphql`
query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            slug
            title
          }
          id
          excerpt
        }
    }
}
`

export const Head = () => <Seo title="My blog posts"/>

export default BlogPage