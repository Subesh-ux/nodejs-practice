import express from "express"

const server = express()

const port = 8000

server.get("/",(req,res)=>{
    res.send("/",)
})

server.listen(port,()=>console.log("The active port is",port))