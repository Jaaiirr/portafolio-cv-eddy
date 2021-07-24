/*Esta funcion nos coloca en la posicion correcta cuando ocupamos un anclaje (#about) 
para dirigirnos a esa seccion, ya que en ocasiones si tenemos un nav bar fijo en la parte
posterior nuestro contenido no se muestra correctamente */

function goToSection (id){
    const section = document.getElementById(id);
    window.scrollTo(section.offsetLeft, section.offsetTop -20);
}