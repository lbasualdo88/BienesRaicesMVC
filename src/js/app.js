document.addEventListener('DOMContentLoaded', function() { //carga html, css y js y luego ejecuta la funcion que se creo dentro

    eventListener();

    darkMode();
});

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

//    console.log(prefiereDarkMode.matches);

    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

   prefiereDarkMode.addEventListener('change', function() {

    
    if (prefiereDarkMode.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

   })

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', modoDark)
}

function modoDark() {
    document.body.classList.toggle('dark-mode');

}

function eventListener() {
    const mobileMenu = document.querySelector('.mobile-menu'); //se crea una variable que toma el valor de la clase que tiene en html
    mobileMenu.addEventListener('click', navegacionResponsive); //la variable llama a la funcion que crea y muestra un evento que esta entre parentesis
    //el evento que se crea arriba es (hacer click) y le pasa por parametro la funcion que esta mas abajo

    
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', seleccionarMetodo));

}

function navegacionResponsive() { 
    const navegacion = document.querySelector('.navegacion');//se crea una variable que toma el valor de la clase que tiene en html
                    
    //ese (classList) y (contains) crea una clase en el html del navegador.
        if (navegacion.classList.contains('mostrar')) { //crea una clase ('mostrar')dentro de esa clase ('navegacion')
            navegacion.classList.remove('mostrar'); //si la clase esta presente la remueve
        } else {
            navegacion.classList.add('mostrar'); //caso contrario la agrega y la muestra
        }

        //OTRA FORMA MAS CORTA//

        //navegacion.classList.toggle('mostrar'); //Esta sola linea (toggle) hace lo mismo que lo que esta en la linea del if y else

}

function seleccionarMetodo(e) {
    const contactoDiv = document.querySelector('#contacto');


    if(e.target.value === 'telefono') {
        contactoDiv.innerHTML = `
            <label for="telefono">Numero Teléfono</label>
            <input type="tel" placeholder="Tu Teléfono" id="telefono"  name="contacto[telefono]" required>

            <p>Elija la fecha y la hora para la llamada</p>

            <label for="fecha">Fecha Llamada:</label>
            <input type="date" id="fecha"  name="contacto[fecha]" required>

            <label for="hora">Hora Llamada:</label>
            <input type="time" id="hora" min="09:00" max="18:00"  name="contacto[hora]" required>

        `;
    } else {
        contactoDiv.innerHTML = `
            <label for="email">E-mail</label>
            <input type="email" placeholder="Tu Email" id="email" name="contacto[email]" required>
        `;
    }
}
