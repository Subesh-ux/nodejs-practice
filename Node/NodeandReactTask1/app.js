import http from "http"

import Routes from "./Routes/vegetables.routing.js"


const server = http.createServer(async(req,res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.writeHead(200,
        {
            "Content-type" : "Application/json"
        }
    )

    try {
        const response = await Routes(req,req.method)

        res.write(JSON.stringify(response))
        res.end()
    } 
    catch (error) {
        res.write("You have an Error")
        res.end()
    }
})

server.listen(8000, ()=>console.log("The Port 8000 is currently active."))