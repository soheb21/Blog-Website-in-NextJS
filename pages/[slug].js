import React, { useState } from 'react'
import * as fs from "fs"
const Slug = (props) => {

    const [blogs, setBlogs] = useState(props.myBlog)

    return (
        <div className='about'>
            <div className="slug_content">
                <h1>Title of the page <span>{blogs.title}</span></h1>
                <hr />
                <div className='blog_con'>
                    {blogs.content}
                </div>
            </div>
        </div>
    )
}
//getStaticPaths() ye kitne slug file  hai. saare chaiye ismai phir getStaticProps() ye data dega . 
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'learn-javascript' } },
            { params: { slug: 'learn-mongoDB' } },
            { params: { slug: 'learn-nextjs' } },
        ],
        fallback: false
    };
}

//getStaticProps() ye method slug k data deta hai ismai logic hota hai
export async function getStaticProps(context) {
    // logic
    // console.log(context.params)
    const { slug } = context.params
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")

    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

//SSR
// export async function getServerSideProps(context) {
//     // Fetch data from external API
//     // console.log(context.query)
//     try {
//         const { slug } = context.query;
//         const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//         const data = await res.json()
//         return {
//             props: { data },
//         }
//     } catch (error) {
//         console.log("server site slug error:", error)
//     }
// }



export default Slug
