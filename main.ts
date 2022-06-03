input.onButtonPressed(Button.A, function () {
    if (Temperature < 23) {
        basic.showString("N")
    } else {
        if (Breeze >= 20) {
            basic.showString("Fan")
        } else {
            basic.showString("AC")
        }
    }
})
let Breeze = 0
let Temperature = 0
Temperature = 24
Breeze = 0
