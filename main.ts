input.onButtonPressed(Button.A, function () {
    posicion_jugador += -1
})
input.onButtonPressed(Button.B, function () {
    posicion_jugador += 1
})
let y_enemigo = 0
let value = 0
let posicion_jugador = 2
let enemigos = [
randint(0, 4),
randint(0, 4),
randint(0, 4),
randint(0, 4),
randint(0, 0)
]
let posicion_enemigo = -4
basic.forever(function () {
    posicion_jugador = Math.constrain(posicion_jugador, 0, 4)
    basic.clearScreen()
    for (let index = 0; index <= enemigos.length - 1; index++) {
        value = enemigos[index]
        y_enemigo = (posicion_enemigo + index) % enemigos.length
        led.plotBrightness(value, y_enemigo, 50)
        if (y_enemigo == 4 && posicion_jugador == value) {
            basic.showIcon(IconNames.No)
            basic.showIcon(IconNames.Sad)
            posicion_enemigo = -4
        }
    }
    led.plot(posicion_jugador, 4)
})
loops.everyInterval(750, function () {
    posicion_enemigo += 1
    for (let index = 0; index <= enemigos.length - 1; index++) {
        value = enemigos[index]
        y_enemigo = (posicion_enemigo + index) % enemigos.length
        if (y_enemigo == 0) {
            enemigos[index] = randint(0, 4)
        }
    }
})
