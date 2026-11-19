// Seleccionar los elementos
let campoNombre = document.querySelector("#campo-nombre");
let campoParcial1 = document.querySelector("#campo-parcial1");
let campoParcial2 = document.querySelector("#campo-parcial2");

let botonRegistrar = document.querySelector("#boton-registrar");
let botonReiniciar = document.querySelector("#boton-reiniciar");
let listaTarjetas = document.querySelector("#lista-tarjetas");

botonRegistrar.addEventListener("click", () => {
    let nombre = campoNombre.value;
    const parcial1 = Number(campoParcial1.value);
    const parcial2 = Number(campoParcial2.value);

    // Calcular el promedio
    const promedio = ((parcial1 + parcial2) / 2).toFixed(1);

    if(promedio >= 6.0){
        listaTarjetas.innerHTML += `
        <div class="tarjeta estado-positivo">
            <h3>${nombre}</h3>
            <p>Promedio: ${promedio}</p>
            <p>Estado: Aprobado</p>
        </div>
        `;
    }else{
        listaTarjetas.innerHTML += `
        <div class="tarjeta estado-alerta">
            <h3>${nombre}</h3>
            <p>Promedio: ${promedio}</p>
            <p>Estado: Reprobado</p>
        </div>
        `;
    }

    campoNombre.value = "";
    campoParcial1.value = "";
    campoParcial2.value = "";
    campoNombre.focus();
});

botonReiniciar.addEventListener("click", () => {
    listaTarjetas.innerHTML = "";
});
