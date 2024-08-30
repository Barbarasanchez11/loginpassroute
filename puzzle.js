// Snippets de código para poder componer el programa

//Usado?: yes(app.js)
  const middlewares = require('./middlewares');
//--- Explicación: se importan middlewares definidos en 'middlewares.js'

// -------------------------------------------------------------------------------------

//Usado?: yes (app.js)
const bodyParser = require('body-parser');
//--- Explicación:nos da los datos de formularios

// -------------------------------------------------------------------------------------

//Usado?: yes
const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?:Yes (app.js)
const express = require('express');
//--- Explicación: se importa express para crear el servidor

// -------------------------------------------------------------------------------------

//Usado?: yes (app)
const bodyParser = require('body-parser');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: yes(mid)
const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: yes(mid.js)
const dotenv = require('dotenv');
//--- Explicación:carga variables de entorno desde el archivo.env

// -------------------------------------------------------------------------------------

//Usado?: yes (rou)
const middlewares = require('./middlewares');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?:yes
const routes = require('./routes');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: yes
dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: yes
const app = express();
//--- Explicación:inicializa express

// -------------------------------------------------------------------------------------

//Usado?: yes(app)
const PORT = 4000;
//--- Explicación:se asigna puerto a variable

// -------------------------------------------------------------------------------------

//Usado?: yes (app)
const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?:yes
dotenv.config();
//--- Explicación:carga variables de entorno desde el .env

// -------------------------------------------------------------------------------------

//Usado?:yes
middlewares.setupApp(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:yes
routes.setup(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:yes(mid)
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: se valida si la palabra es la correcta, si es correcta se guarda y se sigue ejecutando,
// si no, redirige a error


// -------------------------------------------------------------------------------------


//Usado?:yes
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: se establece la raiz,
//se comprueba si hay error en la consulta, si el error es igual a '1' el mensaje: Palabra incorrecta, inténtalo de nuevo.' 
//si hay un error pero es diferente a 1 te da : 'No estás logado.
//si no hay error te da ''(cadena vacia)

//si existe req.session.palabraSecreta, redirige a la ruta /profile


// -------------------------------------------------------------------------------------


//Usado?:yes
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: introducir la palabra, en caso de error aparece mensaje, botón submit de enviar el form


// -------------------------------------------------------------------------------------

//Usado?:yes
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación:

//Usado?:yes
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: se tiene que pasar por middlewares.validarPalabraMiddleware para hacer la validadción antes de darnos una resp.
//aparecerá un mensaje y un form para cerrar sesión

// -------------------------------------------------------------------------------------

//Usado?:yes(app)
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:yes
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:yes 
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: se asigna el puerto donde se va a consumir el end point


// -------------------------------------------------------------------------------------

//Usado?:yes
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: se asegura que la sesión está activa con la palabraSecreta, si está pas al siguiente middleware
//si no, redirige a la pag. de inicio con un mensaje de error

// -------------------------------------------------------------------------------------


//Usado?:yes
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: desde la ruta /profile, si la sesión es válida te devuelve el HTML

// -------------------------------------------------------------------------------------


//Usado?:yes
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: destroy se usa para destruir los datos de la sesión,cuando se intenta destruir
//puede ocurrir un error, por eso se le pasa el parámetro.
//si hay error se imprime Error al cerrar sesión:', err
//Se redirige a la raíz('/') despues de destruir la sesión

// -------------------------------------------------------------------------------------

//Usado?:yes
module.exports = {
  setup,
};
//--- Explicación:exportamos modulo

// -------------------------------------------------------------------------------------

//Usado?:yes
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:exportamos modulos

// -------------------------------------------------------------------------------------

