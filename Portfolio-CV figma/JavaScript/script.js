/*Menu*/
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

$btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
});

d.addEventListener("click",e => {
    if(!e.target.matches(".menu a ")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");

});
})(document);

/*Formulario Submit email*/

((d) => {/**Declaracion de variables */
    const $form =d.querySelector(".contact-formulario"),
    $loader=d.querySelector(".contact-form-loader"),
    $response=d.querySelector(".contact-form-response");/**Este es el id que contiene la frase "Muchas gracias" */

$form.addEventListener("submit" ,e=> {
    e.preventDefault();/**Prevenimos la accion por defecto (enviar formulario) */
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/jairtellezromero9678@gmail.com",{/**Mandamos la peticion al servicio */
        method:"POST",
        body:new FormData(e.target)/**Aqui esta la informacion que se va a enviar */
    })
    .then((res=>res.ok ? res.json():Promise.reject(res)))/*Parte negativa*/ 

    /**Si la respuesta es positiva se ejecuta este .then */
    .then(json=>{
        console.log(json);
        location.hash = "#gracias";/**Se Activa la ventana modal con el id #gracias */
        $form.reset();/**Cuando se active la ventana modal, reseteamos el formulario */
    })
    .catch(err=> { /**Obtenemos el error si el formulario no se envio y lo mostramos en pantalla */
        console.log(err);
        let message = err.statusText || "Ocurrio un error, intentalo de nuevo"
        $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}`;
    }).finally (() => {
        $loader.classList.add("none");
        setTimeout(()=> {
            location.hash = "#close";/**Cerramos la ventana modal despues de 3s */
        },3000);

    });
});

})(document);
