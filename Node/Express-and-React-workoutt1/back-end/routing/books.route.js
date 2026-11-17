import express from "express"

import { getAllBooks ,addBooks, removeBooks, updateBooks} from "../controller/books.controller.js";

export const booksRoute = express.Router()

booksRoute.get("/", (req,res)=>{
    const data = "Welcome to the Book Store"
    res.status(200).send(data)
})

booksRoute.get("/books", (req,res)=>{
    const resp = getAllBooks()
    res.status(200).send(resp)
})

booksRoute.post("/books/add",(req,res)=>{
    const data = req.body
    const resp = addBooks(data)
    res.status(201).send(resp)
})

booksRoute.delete("/books/delete/:id", (req, res) => {
    const id = req.params.id;
    removeBooks(id);
    res.status(204).send();
});

booksRoute.put("/books/update/:id",(req,res)=>{
    const id = req.params.id
    const content = req.body
    const resp = updateBooks(id,content)
    res.status(200).send(resp)
})