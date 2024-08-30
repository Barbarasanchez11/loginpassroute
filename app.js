const express = require('express')
const app = express()
const session = require('express-session');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const middlewares = require('./middlewares')
const routes = require('./routes')

dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));

middlewares.setupApp(app)
routes.setup(app)



const port = 4000

app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`)

})