const express = require("express")

const router = express.Router()

const upload = require("./helpers/upload")

const {createMemory, getAll, get, remove, updateMemory} = require("./controllers/MemoryController")

router.post("/", upload.single("image"), 
(req, res, next) => {
    const image = req.file

    if(!image) {
        return res.status(400).json({msg: "Por favor envie uma imagem Jpeg ou PNG"})
    }
    next()
}, 
(req, res) => createMemory(req, res))

router.get("/", (req, res) => getAll(req, res))
router.get("/:id", (req, res) => get(req, res))
router.delete("/:id", (req, res) => remove(req, res))
router.patch("/:id", upload.single("image"), (req, res) => updateMemory(req, res))


module.exports = router