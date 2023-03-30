// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/getblog?slug=learn_mongoDB
const fs= require("fs")
export default function handler(req, res) {

  fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8",(err,data)=>{
    if(err){
        res.status(500).json({error:"InValid json file"})
    }
      const obj_data=JSON.parse(data);
      res.status(200).json(obj_data)

  })
}
