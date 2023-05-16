const cargarPeliculas = async () => {

    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c381a5bcd659a0044f4b90006300f8f1&language=es-ES');
        console.log(respuesta)

        let peliculas = "";
        if (respuesta.status === 200) {
            const datos = await respuesta.json()
            datos.results.forEach(pelicula => {
                peliculas +=  `
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
                <h3>${pelicula.title}</h3>
                </div>
                `;
                
            }); 

            document.getElementById("contenedor").innerHTML = peliculas
        }else if (respuesta.status === 401){
            console.log("pusiste la llave mal")
        }else if (respuesta.status === 404){
            console.log("movie not found")
        }else {
            console.log("hubo un error")
        }

    } catch (error) {
        console.log(error)
    }

}

cargarPeliculas()

