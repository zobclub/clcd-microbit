// tests go here; this will not be compiled when this package is used as a library
CLCD.init()
CLCD.setContrast(35)
basic.forever(function () {
    CLCD.setCursor(0, 0)
    CLCD.prints("AX=     ")
    CLCD.setCursor(3, 0)
    CLCD.printn(input.acceleration(Dimension.X))
    CLCD.setCursor(0, 1)
    CLCD.prints("AY=     ")
    CLCD.setCursor(3, 1)
    CLCD.printn(input.acceleration(Dimension.Y))
    basic.pause(300)
})
