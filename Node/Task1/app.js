
import http from "http"
import Routes from "./Routes/userlist.routes.js"


const server = http.createServer( async(req,res)=>{

    res.writeHead(200,
        {"Content-type" : "application/Json"}
    )

    try{
         const response = await Routes(req, req.method)
        res.write(JSON.stringify(response))
        res.end()
    }
    catch(error){
        console.log("You have an error fix it you dumb creature.")
    }
})

server.listen(8000, () => console.log("Port 8000 is active currently"))