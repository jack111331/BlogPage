import * as React from "react"
import Navbar from "../components/navbar"
import Seo from "../components/seo"

const Publication = () => {
    return (
        <div>
            <Navbar>Navbar</Navbar>
        </div>
    )
}

// export default IndexPage
export default Publication

export const Head = () => <Seo title="Publication" />
