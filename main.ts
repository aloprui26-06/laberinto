let izquierda = false
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        izquierda = Math.randomBoolean()
        if (izquierda == true) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
        if (izquierda == false) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
