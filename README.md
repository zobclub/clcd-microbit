# clcd-microbit
---
This extension supports printing text on I2C Character Liquid Crystal Display. 
* AQM0802A  http://akizukidenshi.com/catalog/g/gK-06795/
* 8x2 Text Line 
* Controller ST7032 
* I2C address 0x3E

## Method
---
* Initialize

Always run at the beginning
```
CLCD.init()
```

* Contrast setting
```
CLCD.setContrastr(c)
```
c:Constrast value

* Cursor position setting
```
CLCD.setCursor(x, y)
```
x:number Character position
y:number Line position

* String display
```
CLCD.prints(s)
```
s:string Characters to show

* Number display
```
CLCD.printn(n)
```
n:number Number to show

* Decimal display
```
CLCD.printn2(n1, n2)
```
n1:number Integer part
n2:number Decimal part

## Example
---
```
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
```

## License
MIT

## Supported targets

* for PXT/microbit
