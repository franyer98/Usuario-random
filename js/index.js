//variables
const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const genero= document.querySelector('#genero');
const usuario= document.querySelector('#usuario');
const contraseña= document.querySelector('#contraseña');
const edad= document.querySelector('#edad');

//funcion
const generar = async() =>{
    try {
    const url ='https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const {results} =  await respuesta.json();
    const datos = results[0];
    console.log(datos)

    foto.src = datos.picture.medium;
    nombre.textContent = datos.name.first;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;
    genero.textContent = datos.gender;
    usuario.textContent = datos.login.username;
    contraseña.textContent = datos.login.password;
    edad.textContent = datos.dob.age;
    

    
    




    } catch (error) {
        console.log(error);
        
    }
    
}

boton.addEventListener('click', generar);
document.addEventListener('DOMContentLoaded', generar)

