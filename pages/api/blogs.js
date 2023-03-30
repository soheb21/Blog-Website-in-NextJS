// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/blog
const fs = require("fs")
export default async function handler(req, res) {

  // fs.readdir("blogdata","utf-8",(err,data)=>{
  //     console.log(data)
  //     res.status(200).json(data)
  // })
  const data = await fs.promises.readdir("blogdata")

  let dummarr = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    let myfile = await fs.promises.readFile(`blogdata/${item}`, "utf-8")

    dummarr.push(JSON.parse(myfile))

  }
  res.status(200).json(dummarr)



}
