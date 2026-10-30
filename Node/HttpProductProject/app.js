import http from "http"

import Routes from "./routing/route.js"



const server = http.createServer((req,res)=>{
    res.writeHead(200,
        {
            "Content-type" : "application/json"
        }
    )
    
    Routes(req,res)

    

    res.end()
})

server.listen(8000,()=> console.log("The server is running on port 8000"))