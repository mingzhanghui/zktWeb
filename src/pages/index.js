import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = (props) => {
const data = props.data.allWordpressPost.edges;
return(  
<Layout>
	{
		data.map(item => { return (<div><div>标题：{item.node.title}</div><div>日期：{item.node.date}</div><div dangerouslySetInnerHTML={{__html:item.node.content}}/> </div>) })
	} 
  </Layout>
)
}

export const pageQuery = graphql`
    query IndexQuery {
        allWordpressPost( sort: { fields: [ date ], order: DESC } ){
    edges {
        node {
            id
            title
            slug
            date( formatString: "/YYYY/MM/DD/" )
		content
		excerpt
             
        } 
    }
}
}    

`
export default IndexPage
