const fs = require("fs");
const express = require("express");
const path = require("path");



const app = express();
const PORT = 9000;
const dirPAth = path.join(__dirname,"currentTimeStamp")
// console.log(dirPAth)

app.use(express.static("currentTimeStamp"))

app.get('/',(req,res)=>{
    res.send('<h1>Hey Am working Fine</h1>')
})

app.get('/current/time',(req,res)=>{
    const time = new Date()
    const currentDate = time.toUTCString().slice(0,-4)
    const data = `Last created Time stamp is ${currentDate}`
    fs.writeFileSync(`${dirPAth}/date-time.txt`,data,(err)=>{
        if(err){
            console.log(err)
        }  
    })
    res.sendFile(path.join(__dirname,"currentTimeStamp/date-time.txt"))
})

app.listen(PORT, ()=>console.log(`Server Started working in localhost:${PORT}`))