input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Tortoise)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(1000)
})
basic.showLeds(`
    # . . . #
    # . . . #
    # # # # #
    # # # # #
    # # # # #
    `)
music.playMelody("A G C G E B C5 C5 ", 120)
basic.showString("Hello!")
