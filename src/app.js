const express = require('express')
const hbs = require('hbs')
const path = require('path')
const user = require('./models/umsg')
require('./db/conn')

  // "dependencies": {
  //   "body-parser": "^1.20.2",
  //   "express": "^4.18.2",
  //   "hbs": "^4.2.0",
  //   "mongoose": "^7.0.1",
  //   "path": "^0.12.7",
  //   "validator": "^13.9.0"
  // }

const port = process.env.PORT || 5000
const app = express()

app.use(express.urlencoded({extended: true}))
const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))


app.set('view engine', 'hbs')

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/thanks', (req, res) => {
    res.send('message send succesfully')
})

app.post('/', async(req, res) => {
    try{
        const userData = new user(req.body)
        await userData.save()
        res.status(201).render('index')
    }
    catch(err){
        res.status(504).send(err)
    }
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static('views'))
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})