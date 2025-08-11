import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config({ path: 'DB_CONN.env' })

const app = express()

app.use(cors())

app.use(express.json())

import conn from "./db/conn.js"

conn()

import routes from "./routes/router.js"

app.use("/api", routes)

app.listen(3000, function(){
    console.log("Funcionando")
})

