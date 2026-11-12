import express from "express"
import { getAllUsers ,getSingleUser } from "../Controller/users.controller.js"

export const UserRoute = express.Router()


UserRoute.get("/",(req,res)=>{
    res.send("Welcome to Express")
})
UserRoute.get("/users",(req,res)=>{
    res.send(getAllUsers())
})
UserRoute.get("/users/:id",(req,res)=>{
    const id = req.params.id
    res.send(getSingleUser(id))
})
