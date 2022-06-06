const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT || 3000

app.use(express.json())

morgan.token('contact', function (req, res) { return JSON.stringify({"name": req.body.name, "number": req.body.number})})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :contact'))

let contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/persons', (req, res)=> {
    res.json(contacts)
})

app.get('/info', (req, res) => {
    let date = new Date()
    res.send(`<p>Phonebook has info for ${contacts.length} people. Request made ${date}.</p>`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const contact = contacts.find(person => person.id === id)
    
    if (contact) {
        res.json(contact) 
    } else {
        res.status(404).end()
    }
})

const generateId = () => {
    return Math.ceil(Math.random()*1000)
}

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name) {
        return res.status(400).json({
            error: 'Please enter a name.'
        })
    }

    if (!body.number) {
        return res.status(400).json({
            error: 'Please enter a number.'
        })
    }

    if (contacts.find(contact => contact.name === body.name)) {
        return res.status(400).json({
            error: "Name already exists in contact list."        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    contacts = contacts.concat(person)
    res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    contacts = contacts.filter(person => person.id !== id)

    res.status(204).end()
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})