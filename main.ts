//https://download.kamami.pl/p581977-microbit%20expansion%201.PNG
//https://pxt.azureedge.net/blob/aa0ba7aee33f0b9260c0b0f5df3a4eb4d60534e0/static/mb/device/pins-v1-v2.png

// neopixel - ovládání led diod 

let strip = neopixel.create(DigitalPin.P16, 32, NeoPixelMode.RGB)

strip.showRainbow(1,360)


basic.forever(function() {
    //let strip: neopixel.Strip
    strip.rotate()
    strip.show()
    basic.pause(5)
})

input.onButtonPressed(Button.A, function() {
    strip.clear()
    strip.show()
}) 



//ultrazvukový senzor

/* function ping(trig: DigitalPin, echo: DigitalPin, maxCmDistance = 500): number {
    pins.setPull(trig, PinPullMode.PullNone)
    pins.digitalWritePin(trig, 0)
    control.waitMicros(2)
    pins.digitalWritePin(trig, 1)
    control.waitMicros(10)
    pins.digitalWritePin(trig, 0)

    const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance = 50)

    let sosCoef = 1 / (343 / 10000 / 2)
    return Math.round(d / sosCoef)

}

basic.forever(function () {
    let data = ping(DigitalPin.P8, DigitalPin.P15)
    console.logValue("echo time", data)
    basic.pause(50)
}) */