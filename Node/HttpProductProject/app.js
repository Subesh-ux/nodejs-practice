import http from "http"

import { getAllProducts , getFashionProducts,getSnacksProducts,getGroceryProducts,
        deleteFashionProducts,deleteGroceryProducts,deleteSnacksProducts
} from "./module/productListModule.js"



const server = http.createServer((req,res)=>{
    res.writeHead(200,
        {
            "Content-type" : "application/json"
        }
    )

    if ((req.url == "/products" || req.url == "/Products") && req.method == "GET") {
        const data = JSON.stringify(getAllProducts());
        res.write(data)
    }
    else if((req.url == "/products/fashion" || req.url == "/Products/fashion") && req.method =="GET"){
        const data = JSON.stringify(getFashionProducts());
        res.write(data)
    }
    else if((req.url == "/products/grocery" || req.url == "/Products/grocery") && req.method =="GET"){
        const data = JSON.stringify(getGroceryProducts());
        res.write(data)
    }
    else if((req.url == "/products/snacks" || req.url == "/Products/snacks") && req.method =="GET"){
        const data = JSON.stringify(getSnacksProducts());
        res.write(data)
    }
    else if ((req.url == "/products/fashion") && req.method == "DELETE"){
        const data = JSON.stringify(deleteFashionProducts())
        res.write(data)
    }
    else if ((req.url == "/products/grocery") && req.method == "DELETE"){
        const data = JSON.stringify(deleteGroceryProducts())
        res.write(data)
    }
    else if ((req.url == "/products/snacks") && req.method == "DELETE"){
        const data = JSON.stringify(deleteSnacksProducts())
        res.write(data)
    }
    else{
        res.write("Welcome to the store")
    }

    res.end()
})

server.listen(8000,()=> console.log("The server is running on port 8000"))