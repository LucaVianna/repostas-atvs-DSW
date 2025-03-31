import express from 'express' //INSTALE O EXPRESS PARA CRIAR O NODE_MODULES
import { User, printName, printAge } from './user.js'

const app = express()

app.get("/user_data", (req, res) => {
    const user = new User('Amazin', 100)
    if (user){
        const resposta = `${printName(user)} and ${printAge(user)}`
        return res.status(200).send(resposta)
    } else {
        return res.status(500).send('Error: User not found!')
    }
})

app.listen(8080, () => {
    console.log('App no Ar!')
})