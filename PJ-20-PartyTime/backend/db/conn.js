import mongoose from "mongoose"

async function main() {

    
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.j83thir.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)

        console.log("Conectado!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

export default main