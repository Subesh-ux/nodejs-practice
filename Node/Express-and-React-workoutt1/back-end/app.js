import express from "express"
import cors from "cors"
import { booksRoute } from "./routing/books.route.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/",booksRoute)
app.use((req,res)=>{
    res.status(404).send("Invalid request")
})



app.listen(8000, ()=> console.log("The port 8000 is currently active."))