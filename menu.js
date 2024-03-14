fetch(menu.json)

//que hace esta linea? esta linea inicia la carga del archivo menu.json; fecht es una funcion de javascriptque facilita la realizacion de solicitudes de red como odtener datos de un archivo o un endpoint de API.
//como funciona? fect devuelve una promesa que; cuando se resuelve; te da acceso a la respuesta de la solicitud, Esta respuesta no es directamente los datos en forma JSON, si si no un objeto que incluye varios detalles sobre la respuesta misma 
.then(response => response.json())
//Que hace? Esta linea toma el odjeto de respuesta obtenidos del fetch y el utiliza el metodo  .json() para convertir el cuerpo de la respuesta en un objeto javascript (esto asume el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metoddo .json() tambienContait devuelve una  promesa. la cual resuelve con el contenido del cuerpo en formato 
.them(data ={
    const menuContainer = document.getElementById('menu-container');
    //Que hace? aqui se presenta los datos JSON ya convertidos. Se odtienen una referencia el  contenedor del menu en el HTML mediante  getElementBByid ('menu-container'), y luego se itera sobre los elementos (categorias) del menu.
  data.items forEach(category => {
        contscategoryTitle = document.createElement('h2');
       
//Como funciona? Para cada categoria en los datos , se realiza  varios pasos :
//Crea un titulo para la categoria: secrea un elemento <h2> para el titulo de la categoria , se 
//establece su contenido de texto al nombre de la categoria (category.category), y luego se agrega al contenido del menu.
// Crear una tablapor cada categoria. Primero se define el encabezado de la tabla (<th>foto</th><th>Descripcion</th><th>Precio</th>).

category.items.forEach (item => 
tableBody += ´<tr>´
 <td><mg src= "${item.image}" alt="{item.name}"></img> </td>
 <td>${item.name} - ${item.descripcion}</td>
 <td>4{item.price}</td>
 </tr>
    });
    //Que hace? para cada item dentro de category.item ; se concatena 
    //una nueva fila (<tr>) a tablebody. Esta fila contiene una celda para la imagen del elemento (usando el atributo src para URL de la imagen y "alt" del elemento )
    //(para el texto alternativo), tra celda para el nombre y la descripcion del elemento, y una tercera para el precio del elemento.
    table.innerHTML = tablehead + tableBody;
    //Que hace? una vez completadas todas las filas de la tabla para los elementos de un categoria de un 
    // , se combina el encadezado de la tabla (tableHead) con el cuerpo de la tabla (tablaBody) y se establece
    //como el contenido HTML de la tabla. Finalmente , esta tabla se añade al contenedor del menu en la pagina web.
    });
    //Poblar la tabla con los elementos: Para cada item dentro de una categoria; se crea una fila (<tr></tr>) con tres celadas (<td></tr>: una parte la imagen)
    //(con un elemento) <img); otra parte el nombre y descripcion del item, y uan utiliza para el precio. Esto se hace concatendo la nueva fila a una variable tableBody 
    //Finalizar y mostrar la tabla: Una vez que todas las filas han sido agregadas a tableBody, se establece 
