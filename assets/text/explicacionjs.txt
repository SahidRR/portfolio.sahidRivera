TIEMPO DE PERSONA EN LA PAGINA

La primera línea del código crea una variable llamada horaEntrada que utiliza el constructor Date() para obtener la hora actual en el momento en que la página se carga. Esta variable se utilizará más adelante para calcular la duración de la visita.

La siguiente sección de código utiliza el método addEventListener() para registrar una función que se ejecutará antes de que la persona abandone la página web. El evento que desencadena esta función es beforeunload, que se dispara cuando la página está a punto de descargarse o cerrarse.

Dentro de la función beforeunload, la segunda línea del código crea una variable llamada horaSalida utilizando el constructor Date() de nuevo. Esta variable también representa la hora actual, pero esta vez es el momento justo antes de que la persona abandone la página web.

La tercera línea del código calcula la diferencia de tiempo en segundos entre horaSalida y horaEntrada dividiendo la diferencia en milisegundos por 1000.

La cuarta línea del código utiliza el método console.log() para mostrar la duración de la visita en la consola del navegador. Este mensaje incluye una cadena de texto que indica la duración de la visita en segundos.

En resumen, este código registra la hora en que una persona entra en una página web y luego calcula la duración de su visita cuando salen de ella. La duración de la visita se muestra en la consola del navegador. Esto puede ser útil para el análisis del tráfico del sitio web o para obtener una idea del nivel de compromiso de los visitantes con el contenido de la página.

BOTON MODO DIA MODO NOCHE

La primera línea del código crea una constante llamada switchBtn que representa el botón que activa el cambio de tema. Las siguientes tres constantes (colorFondoElems, oscuroElems y whiteElems) representan los elementos de la página que cambiarán de color cuando se cambie el tema.

La siguiente sección de código utiliza el método addEventListener() para registrar una función que se ejecutará cuando el botón de cambio de tema sea presionado.

Dentro de la función, la primera sección de código itera a través de cada elemento en colorFondoElems y verifica si su clase actual es colorFondo o colorFondo-claro. Si es colorFondo, reemplaza esa clase con colorFondo-claro, y si es colorFondo-claro, la reemplaza con colorFondo. Este proceso se repite para los elementos en oscuroElems y whiteElems.

Las últimas dos líneas del código cambian la clase del botón de cambio de tema entre white y black. Esto cambia el color del texto en el botón y proporciona retroalimentación visual para el usuario.

Por último, la última línea del código utiliza el método setItem() de localStorage para guardar el modo de la página (claro u oscuro) en el almacenamiento local del navegador. Esto significa que si el usuario vuelve a visitar la página en una fecha posterior, la página recordará el último modo que seleccionó.

En resumen, este código permite a los usuarios cambiar el tema de la página entre el modo claro y el modo oscuro. Al hacer clic en el botón de cambio de tema, los elementos en colorFondoElems, oscuroElems y whiteElems cambiarán de color. El botón de cambio de tema también cambia de color para proporcionar retroalimentación visual al usuario. Además, el modo seleccionado se guarda en localStorage para recordar la preferencia del usuario en futuras visitas.

LOCALSTORAGE
La primera línea del código define una variable booleana llamada modoDia, que se establece en true si el valor de localStorage para la clave "modoDia" es "true", de lo contrario, se establece en false.

La segunda línea define una función llamada replaceClass que acepta tres argumentos: elements, fromClass y toClass. Esta función itera a través de cada elemento en el array elements y reemplaza la clase fromClass con la clase toClass utilizando el método classList.replace().

La sección de código siguiente hace uso de la función replaceClass para cambiar las clases de los elementos en la página, dependiendo del valor de la variable modoDia.

Si modoDia es true, se reemplaza la clase colorFondo por colorFondo-claro, la clase oscuro por claro, la clase white por black, y la clase del botón de cambio de tema de white por black.

Si modoDia es false, se hace lo contrario, se reemplaza la clase colorFondo-claro por colorFondo, la clase claro por oscuro, la clase black por white, y la clase del botón de cambio de tema de black por white.

Finalmente, la última línea del código no tiene ningún efecto, ya que el método classList.replace no está llamando a ninguna clase en particular para ser reemplazada en el botón de cambio de tema. Podría ser un error o una línea de código incompleta.


