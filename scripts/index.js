
// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD
const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const inputEmail = document.querySelector('#email-input');
const inputPassword = document.querySelector('#password-input')
const statusLoader = document.querySelector('#loader');
const btnLogin = document.querySelector('.login-btn');

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.
form.addEventListener('submit', (e)=> {
  e.preventDefault();

  let usuarioValido = false;

  baseDeDatos.usuarios.forEach(usuario => {
    if((inputEmail.value === usuario.email) && (inputPassword.value === usuario.password)){
      usuarioValido = true;
      localStorage.setItem('id', usuario.id);
    }
    
  });
  if(usuarioValido){
      statusLoader.classList.remove('hidden'); 
      setTimeout(() => {
        h1.classList.add('hidden');
        form.classList.add('hidden');
        main.innerHTML = "¡Bienvenido al sitio Steve Jobs! :)"
        main.innerHTML += "<button id='sign-out'>Cerrar sesión</button>";
      }, 1000)
  } else {
      console.log("ERROR");
      statusLoader.classList.remove('hidden'); 
      statusLoader.innerHTML = "ERROR. Usuario o contraseña incorrectos. Intentelo de nuevo."
  }
})


// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona recargue la página. Para ello, deberás validar si existe información del usuario al momento en que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y separar la información que tienes que almacenar, a partir del objeto que contiene la información del usuario.

   ¡Manos a la obra!
 */
