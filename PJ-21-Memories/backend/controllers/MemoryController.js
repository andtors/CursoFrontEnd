const Memory = require("../models/Memory")

const fs = require("fs")

const removeOldImage = (memory) => {
    fs.unlink(`public/${memory.src}`, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Imagem excluida com sucesso!")
        }
    })
}

const createMemory = async(req, res) => {
   try {
        const {title, description} = req.body

        const src = `images/${req.file.filename}`

        if(!title || !description) {
            return res.status(400).json({msg: "Por favor, preencha todos os campos."})
        }

        const newMemory = new Memory({
            title, src, description
        })

        await newMemory.save()

        return res.status(201).json({newMemory, msg:"Memoria criada com sucesso!"})

   } catch (error) {
    console.log(error.message)
    res.status(500).send("Ocorreu um erro!")
   }
}

const getAll = async(req, res) => {
    try {
        const memories = await Memory.find()

        res.json(memories)
    } catch (error) {
        console.log(error)
        return res.status(500).send("Ocorreu um erro!")
    }
}

const get = async(req, res) => {
    try {
        const id = req.params.id

        const memory = await Memory.findById(id)

        if(!memory) {
            return res.status(404).json({msg: "Memoria não encontrada."})
        }

        res.json(memory) 
    } catch (error) {
        console.log(error)
        return res.status(500).send("Ocorreu um erro!")
    }
}

const remove = async(req, res) => {
    try {
        const id = req.params.id

        const memory = await Memory.findByIdAndDelete(id)

        if(!memory) {
            return res.status(404).json({msg: "Memoria não encontrada."})
        }

        removeOldImage(memory)

        res.json({memory, msg: "Memoria deletada com sucesso!"}) 
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("Ocorreu um erro!")
    }
}

const updateMemory = async(req, res) => {
    try {
        const id = req.params.id

        const {title, description} = req.body
        
        let src = null

        if(req.file){
            src = `images/${req.file.filename}`
        }

        const memory = await Memory.findById(id)

        if(!memory) {
            return res.status(404).json({msg: "Memoria não encontrada."})
        }

        if(src){
            removeOldImage(memory)
        }

        const updateData = {}

        if(title) updateData.title = title
        if(description) updateData.description = description
        if(src) updateData.src = src
        
        const updateMemory = await Memory.findByIdAndUpdate(id, updateData, {new: true})

        res.json({updateMemory, msg: "Memoria atualizada com sucesso!"})
    } catch (error) {
        console.log(error)
        return res.status(500).send("Ocorreu um erro!")
    }
}

const toggleFavorites = async(req, res) => {
    try {
        const id = req.params.id

        const memory = await Memory.findById(id)

        if(!memory) {
            return res.status(404).json({msg: "Memoria não encontrada."})
        }

        memory.favorite = !memory.favorite

        await memory.save()

        res.json({memory, msg: "Memoria adicionada aos favoritos!"}) 
            
    } catch (error) {
        console.log(error)
        return res.status(500).send("Ocorreu um erro!")
    }
}

const addComent = async(req, res) => {
    try {
        const {name, text} = req.body

        if(!name || !text) {
            return res.status(400).json({msg: "Por favor preencha todos os campos!"})
        }

        const comment = {name, text}

        const id = req.params.id

        const memory = await Memory.findById(id)

        if(!memory) {
            return res.status(404).json({msg: "Memoria não encontrada."})
        }

        memory.comments.push(comment)

        await memory.save()

        res.json({memory, msg: "Comentario adicionado!"}) 
            
    } catch (error) {
        console.log(error)
        return res.status(500).send("Ocorreu um erro!")
    }
}

module.exports = {
    createMemory,
    getAll,
    get,
    remove,
    updateMemory,
    toggleFavorites,
    addComent
}