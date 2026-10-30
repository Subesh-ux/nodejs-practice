import fs from "fs"
import { writeFileModule } from "./module/file.js"

const data = writeFileModule()

// fs.writeFileSync(data.file,data.content)

const file = fs.readFileSync(data.file, "utf8")

console.log(file)