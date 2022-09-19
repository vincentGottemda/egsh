loops.everyInterval(100, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Heart)
})
