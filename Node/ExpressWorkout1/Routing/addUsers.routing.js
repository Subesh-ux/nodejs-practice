import express from "express"
import { addUser,removeUser } from "../Controller/users.controller.js"

export const addUserRoute = express.Router()

addUserRoute.post("/add",(req,res)=>{
    const newUser = req.body
    res.send(addUser(newUser))
})
 addUserRoute.delete("/delete/:id",(req,res)=>{
    const id = req.params.id
    res.send(removeUser(id))
 })
