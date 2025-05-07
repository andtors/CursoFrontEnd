const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNoteBtn = document.querySelector(".add-note")
const searchInput = document.querySelector("#search-input")
const exportBtn = document.querySelector("#exports-notes")

const showNotes = () => {
    cleanNotes()

    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed)

        notesContainer.appendChild(noteElement)
    })
}

const cleanNotes = () => {
    notesContainer.replaceChildren([])
}

const addNote = () => {
    const notes = getNotes()

    const noteObject = {
        id: generatedId(),
        content: noteInput.value,
        fixed: false
    }
  
    const noteElement = createNote(noteObject.id, noteObject.content)

    notesContainer.appendChild(noteElement)

    notes.push(noteObject)

    saveNotes(notes)

    noteInput.value = ""
}

const createNote = (id, content, fixed) => {
    const element = document.createElement("div")

    element.classList.add("note")

    const textArea = document.createElement("textarea")

    textArea.value = content

    textArea.placeholder = "Adicione algum texto..."

    element.appendChild(textArea)

    const pinIcon = document.createElement("i")

    pinIcon.classList.add(...["bi", "bi-pin"])

    element.appendChild(pinIcon)

    const deleteIcon = document.createElement("i")
    
    element.appendChild(deleteIcon)

    deleteIcon.classList.add(...["bi", "bi-x-lg"])

    const duplicateIcon = document.createElement("i")

    duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"])

    element.appendChild(duplicateIcon)

    if(fixed) {
        element.classList.add("fixed")
    }

    element.querySelector("textarea").addEventListener("keyup", (e) => {
        const noteContent = e.target.value

        updateNote(id, noteContent)
    })

    element.querySelector(".bi-pin").addEventListener("click", () => {
        toggleFixNote(id)
    })


    element.querySelector(".bi-x-lg").addEventListener("click", () => {
        deleteNote(id, element)
    })

    element.querySelector(".bi-file-earmark-plus").addEventListener("click", () => {
        copyNote(id, element)
    })

    return element
}

const toggleFixNote = (id) => {
    const notes = getNotes()

    const targetNote = notes.filter((note) => note.id === id)[0]

    targetNote.fixed = !targetNote.fixed

    saveNotes(notes)

    showNotes()
}

const updateNote = (id, content) => {
    const notes = getNotes()

    const targetNote = notes.filter((note) => note.id === id)[0]

    targetNote.content = content

    saveNotes(notes)
}

const deleteNote = (id, element) => {
    const notes = getNotes().filter((note) => note.id !== id)

    saveNotes(notes)

    notesContainer.removeChild(element)
}

const copyNote = (id) => {
    const notes = getNotes()

    const targetNote = notes.filter((note) => note.id === id)[0]

    const noteObject = {
        id: generatedId(),
        content: targetNote.content,
        fixed: false
    }

    const noteElement = createNote(noteObject.id, noteObject.content, noteObject.fixed)

    notesContainer.appendChild(noteElement)

    notes.push(noteObject)

    saveNotes(notes)
}

const generatedId = () => Math.floor(Math.random() * 5000)

const getNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")
    
    const orderedNotes = notes.sort((a, b) => a.fixed > b.fixed ? -1 : 1)

    return orderedNotes
}

const saveNotes = (notes) => localStorage.setItem("notes", JSON.stringify(notes))

const searchNotes = (search) => {
    const searchResult = getNotes().filter((note) => {
        const filteredContent = note.content.toLowerCase()
        return filteredContent.includes(search.toLowerCase())
    })

    if(search !== ""){
        cleanNotes()

        searchResult.forEach((note) => {
            const noteElement = createNote(note.id, note.content)
            notesContainer.appendChild(noteElement)
        })

        return
    }

    cleanNotes()

    showNotes()
}

const exportData = () => {
    const notes = getNotes()

    const csvString = [
        ["ID", "Conteúdo", "Fixado?"],
        ...notes.map((note) => [note.id, note.content, note.fixed])
    ]
    .map((e) => e.join(","))
    .join("\n")

    const element = document.createElement("a")

    element.href = "data:text/csv;charset=utf-8," + encodeURI(csvString)

    element.target = "_blank"

    element.donwload = "notes.csv"

    element.click()
}

addNoteBtn.addEventListener("click", () => addNote())

searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value

    searchNotes(search)
})

noteInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addNote()
    }
})

exportBtn.addEventListener("click", () => {
    exportData()
})

showNotes()