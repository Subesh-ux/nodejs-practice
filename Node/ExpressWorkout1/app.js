import express from "express"
import { UserRoute } from "./Routing/userlist.routing.js"
import { addUserRoute } from "./Routing/addUsers.routing.js"

const app = express()
app.use(express.json())

app.use("/",UserRoute)
app.use("/users/",addUserRoute)
app.listen(8000,()=>console.log("8000 port is currently active."))