import * as fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data =await fs.promises.readdir("contactdata")
        fs.promises.writeFile(`contactdata/${data.length+1}.json`,JSON.stringify(req.body))
        
        res.status(200).json(data)
    } else {
      // Handle any other HTTP method
      res.status(400).json("Invalid contact api")

    }
  }