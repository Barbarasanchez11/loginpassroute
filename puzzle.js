// Snippets de código para poder componer el programa

//Usado?: yes
  const middlewares = require('./middlewares');
//--- Explicación: se importan middlewares desde 'middlewares.js'

// -------------------------------------------------------------------------------------

//Usado?: yes 
const bodyParser = require('body-parser');
//--- Explicación:se importa 'body-parser' asignado a la variable bodyParser 
//nos da los datos de formularios y JSON

// -------------------------------------------------------------------------------------

//Usado?: yes
const session = require('express-session');
//--- Explicación:se importa 'express-session' asignado a la variable session

// -------------------------------------------------------------------------------------

//Usado?:Yes 
const express = require('express');
//--- Explicación: se importa express para crear el servidor y manejar las rutas

// -------------------------------------------------------------------------------------

//Usado?: yes 
const bodyParser = require('body-parser');
//--- Explicación:e importa 'body-parser' asignado a la variable bodyParser 
//nos da los datos de formularios y JSON

// -------------------------------------------------------------------------------------

//Usado?: yes
const session = require('express-session');
//--- Explicación:se importa 'express-session' asignado a la variable session

// -------------------------------------------------------------------------------------

//Usado?: yes
const dotenv = require('dotenv');
//--- Explicación:se importa 'dotenv' asigando a la variable dotenv
//carga variables de entorno desde el archivo.env

// -------------------------------------------------------------------------------------

//Usado?: yes 
const middlewares = require('./middlewares');
//--- Explicación: se importan middlewares desde 'middlewares.js'

// -------------------------------------------------------------------------------------

//Usado?:yes
const routes = require('./routes');
//--- Explicación:se importan las rutas a la app principal

// -------------------------------------------------------------------------------------

//Usado?: yes
dotenv.config();
//--- Explicación:se cargan variables de entorno desde .env

// -------------------------------------------------------------------------------------

//Usado?: yes
const app = express();
//--- Explicación:inicializa express, define rutas y middleware en la aplicación web

// -------------------------------------------------------------------------------------

//Usado?: yes(app)
const PORT = 4000;
//--- Explicación:se define la variable con el puerto 4000, es donde se 
//escucharán las oslicitudes del servidor

// -------------------------------------------------------------------------------------

//Usado?: yes (app)
const dotenv = require('dotenv');
//--- Explicación:inicializa el módulo dotenv, se cargan variables de entorno desde .env

// -------------------------------------------------------------------------------------

//Usado?:yes
dotenv.config();
//--- Explicación:carga variables de entorno desde el .env

// -------------------------------------------------------------------------------------

//Usado?:yes
middlewares.setupApp(app);
//--- Explicación: se llama a la función setupApp del módulo middlewares, 


// -------------------------------------------------------------------------------------

//Usado?:yes
routes.setup(app);
//--- Explicación: se llama a la función setupApp del módulo routes

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
//--- Explicación: se compara req.body.palabra con palabraCorrecta,
//si coinciden se guarda en req.body.palabra y se sigue ejecutando(next())
//si no coincide se reditige al error ('/?error=1')


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
//--- Explicación: se configura el endpoint '/'
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
//--- Explicación: Da un respuesta HTML, en caso de error aparece mensaje,
// botón submit para enviar a la ruta './profile' mediante un POST


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
//--- Explicación: bodyParser analiza los datos de formularios. ession maneja sesiones
//de usuarios en la aplicación:
//secret:es un valor secreto para proteger la sesión y evitar que pueda ser maniulada.
//resave:la sesisón no se vuelve a guaradar si no se modifica.
//saveUninitialized: las sesiones vacías (las que se han creado pero no se han modificado) se guardarán

//Usado?:yes
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: se ruta POST '/profile'
//Se valida la palabra secreta aplicando el middleware(validarPalabraMiddleware),
//si es correcto da un respuesta HTML que contiene un formulario y botón de cierre de sesión('logoy')

// -------------------------------------------------------------------------------------

//Usado?:yes(app)
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación:  configura la aplicación Express para que pueda interpretar y manejar 
//datos enviados a través de formularios HTML (específicamente, aquellos enviados con el método POST).
// Al establecer extended en true, permite trabajar con datos anidados.


// -------------------------------------------------------------------------------------

//Usado?:yes
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: Se llama a la función session que es parte del middleware 'express-session'
//secret: se obtiene de la variable de entorno(PALABRA_SECRETA) se usará si está definida,
//si no, se usará 'secretoSuperSecreto'.
//resave: el false indica que la sesisón no se debe guardar
// saveUninitialized: se guardarán las sesiones nuevas que no se han inicializado

// -------------------------------------------------------------------------------------

//Usado?:yes 
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: se escucha en el puerto(4000) y se muestra el mensaje:
// Servidor en ejecución en http://localhost:4000


// -------------------------------------------------------------------------------------

//Usado?:yes
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: Verifica si es correcta la sesión, 
//si lo es pasa al siguiente middleware
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
//--- Explicación: define ruta GET para /profile,
//se verifica si la sesión está activa
// si la sesión es válida te devuelve el HTML con un formulario y botón de cierre de sesión

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
//--- Explicación:define ruta POST para '/logout'

//destroy se usa para destruir los datos de la sesión,cuando se intenta destruir
//puede ocurrir un error, por eso se le pasa el parámetro.
//si hay error se imprime error en la consola.
//Se redirige a la raíz('/') despues de destruir la sesión

// -------------------------------------------------------------------------------------

//Usado?:yes
module.exports = {
  setup,
};
//--- Explicación:exportamos función setup

// -------------------------------------------------------------------------------------

//Usado?:yes
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:exportamos funciones de middlewares

// -------------------------------------------------------------------------------------

