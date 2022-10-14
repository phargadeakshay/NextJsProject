import { createConnection } from 'mysql';





export default function handler(req, res) {
    let con = createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database: "nodedatabase1"
    
    })
    
    con.connect(async function(err){
        if(err) throw err;

        con.query("Select * from persons",(err,data,field)=>{
            if(err) throw err;
            console.log(data)

        })
        console.log("Connected!")
    })



    res.status(200).json({ name: 'John Doe' })
  }