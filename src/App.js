const express = require('express')
const engine = require('ejs-mate')
const path = require('path')

//initialize express with port
const app = express()
const port = 3000

//setting up ejs template engine
app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//routes for the app
app.use(require('./routes/index-routes'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})