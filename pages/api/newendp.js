// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";
export default async function  handler(req, res) {
let data;
let allData=[];
const items = await fs.promises.readdir("AksJson");

for (const iterator of items) {
  data =await fs.promises.readFile("AksJson/" + iterator,"utf-8")
  allData.push(JSON.parse(data))
}
res.status(200).json(allData);


  // fs.readFile(`AksJson/${req.query.slug}.json`,"utf-8",(err,data)=>{
  //   if(err)
  //   {
  //     res.status(500).json({error:"errno such route available or there is no such josn file"})
  //   }
  //   const jsondata=JSON.parse(data);
  //   res.status(200).json(jsondata);
    
  // })
}

