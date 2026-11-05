import { getAllVegetables } from "../module/vegetables.module.js";


export default function Routes (req,method){

    if(req.url === "/" && method === "GET"){
        const response = {
            "StatusCode" : 200,
            "StatusMessage" : "Success",
            "data" :"Welcome to The Store"
        }

        return response
    }
    if(req.url === "/vegetables" && method === "GET"){
        const response = getAllVegetables()

        return response
    }
}