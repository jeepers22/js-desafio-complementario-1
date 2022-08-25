let valor = prompt("Ingrese número del que desea obtener su tabla: (esc/ESC para finalizar ejecución)")
let valorEntero = 0

while (valor != "esc" && valor != "ESC") {
    valorEntero = parseInt(valor)
    if (valorEntero > 0) {
        alert(`Se mostrará en consola la tabla del número ${valor}`)
        console.log(`\nLa tabla del ${valor} es la siguiente:`)
        for (let i = 0; i <= 10; i++) {
            console.log(`${valor} x ${i} = ${valorEntero * i}`)
        }
    }
    else {
        alert("Debe ingresar un número positivo")
    }
    valor = prompt("Ingrese próximo número del que desea obtener su tabla:  (esc/ESC para finalizar ejecución)")
}

alert("Ha finalizado la ejecución")
