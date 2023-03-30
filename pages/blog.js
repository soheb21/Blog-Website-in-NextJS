import React, { useEffect, useState } from 'react'
import img1 from "../img/about.png"
// import img2 from "../img/bbg.png"
import blogStyle from "../styles/blog.module.css"
import Link from 'next/link'
import Image from 'next/image'
import * as fs from "fs"


const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.dummarr)
  return (
    <div className={blogStyle.blog}>

      {
        blogs.map((val) => {
          return <div className={blogStyle.blog1} key={val.slug}>
            <Link href={`/${val.slug}`}><span className="blog-content">
              {/* title */}
              {val.title}
              <br />
              {val.content.substr(0, 380) + "..."}
              <br />
              {`~~ author:${val.author}`}
            </span></Link>
            <Image className={blogStyle.about_img} width={400} height={400} src={img1} alt="something"></Image>
            {/* <img  src={img1} width={400} height={400} alt="something"/> */}
          </div>
        })
      }
      <div className={blogStyle.blog_detail}>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam animi commodi quam dicta dolores excepturi eaque corrupti possimus consectetur officia facere vel non error et, neque odio. Velit excepturi exercitationem porro dicta libero voluptatum repudiandae, inventore maxime fugiat temporibus, quos fugit explicabo necessitatibus dolor deleniti cumque tempora omnis. Pariatur quod unde reiciendis quidem atque numquam tenetur harum sapiente similique voluptatibus obcaecati odio ut a odit vitae quibusdam asperiores, modi ad adipisci voluptas maiores nostrum! Earum quae necessitatibus, modi, accusamus molestiae voluptas fuga eos, velit fugit voluptatem sed dolorem. Non nostrum provident illum laboriosam adipisci? Deserunt recusandae delectus qui fuga illo optio perferendis voluptatem earum quia, corporis voluptas blanditiis nam cupiditate voluptatibus voluptatum natus repellendus accusamus vero repudiandae, eos ex tempore.
        </h3>
      </div>

    </div>
  )
}


//SSR
// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   try {
//     const res = await fetch("http://localhost:3000/api/blogs");
//     const data = await res.json()
//     return{
//       props:{data},
//     }
//   } catch (error) {
//     console.log("server site error:",error)
//   }
// }


//SSG
//getStaticProps() ye method slug k data deta hai ismai logic hota hai
export async function getStaticProps(context) {
  // logic
    const data = await fs.promises.readdir("blogdata")

    let dummarr = [];
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let myfile = await fs.promises.readFile(("blogdata/"+item), "utf-8")

      dummarr.push(JSON.parse(myfile))

    }
    return{
      props:{dummarr}
    }

}
export default Blog
