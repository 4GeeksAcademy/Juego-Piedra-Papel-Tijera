// 0 --> Piedra
// 1 --> Papel
// 2 --> Tijera

// Función que se encarga de todo el juego
function game() {
    // Variables para almacenar un N random y 
    // recoger los datos enviados por el usuario
    let numberRandom = Math.floor(Math.random() * 3)
    let numberPlayer = document.getElementById("select")
    let valueOption = parseInt(numberPlayer.value)

    // Resetear las clases
    resetOpponent();
    
    // Dependiendo del resultado se muestra un mensaje diferente
    if (valueOption === 0 && numberRandom === 2 || valueOption === 1 && numberRandom === 0 || valueOption === 2 && numberRandom === 1) {
        document.getElementById("message").innerHTML = `<p style="color:green">HAS GANADO!!</p>`
        document.getElementById("select").value = valueOption
    } else if(valueOption === 0 && numberRandom === 0 || valueOption === 1 && numberRandom === 1 || valueOption === 2 && numberRandom === 2){
        document.getElementById("message").innerHTML = `<p style="color:orange">HAS EMPATADO</p>`
        document.getElementById("select").value = valueOption
    } else {
        document.getElementById("message").innerHTML = `<p style="color:red">HAS PERDIDO</p>`
        document.getElementById("select").value = valueOption
    }

    // Añadir las clases para ocultar la transicción
    let list = document.getElementById("choose")
    list.classList.add("disguise")

    if (numberRandom === 0) {
        document.getElementById("paper").classList.add("disguise")
        document.getElementById("scissors").classList.add("disguise")
    } else if(numberRandom === 1) {
        document.getElementById("stone").classList.add("disguise")
        document.getElementById("scissors").classList.add("disguise")
    } else {
        document.getElementById("stone").classList.add("disguise")
        document.getElementById("paper").classList.add("disguise")
    }
}

// Función para el botón de resetear juego
function reload() {
    location.reload();
}

// Función para limpiar las clases
function resetOpponent() {
    document.getElementById("stone").classList.remove("disguise");
    document.getElementById("paper").classList.remove("disguise");
    document.getElementById("scissors").classList.remove("disguise");
}