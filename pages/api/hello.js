// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile("AksJson/aks.json","utf-8",(error,data)=>{

    console.log(typeof data)
    const jsondata=JSON.parse(data)
    console.log(typeof jsondata)
    console.log(jsondata)
    res.status(200).json(jsondata)
    
  })
}
