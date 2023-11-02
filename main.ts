basic.forever(function () {
    if (piano.Touch() == piano.TouchButton(piano.touch.C)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.C)) {
            music.ringTone(262)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.CD)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.CD)) {
            music.ringTone(277)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.D)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.D)) {
            music.ringTone(294)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.DE)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.DE)) {
            music.ringTone(311)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.E)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.E)) {
            music.ringTone(311)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.F)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.F)) {
            music.ringTone(311)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.FG)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.FG)) {
            music.ringTone(370)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.G)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.G)) {
            music.ringTone(392)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.GA)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.GA)) {
            music.ringTone(415)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.A)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.A)) {
            music.ringTone(440)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.AB)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.AB)) {
            music.ringTone(466)
        }
        music.stopAllSounds()
    }
    if (piano.Touch() == piano.TouchButton(piano.touch.B)) {
        while (piano.Touch() == piano.TouchButton(piano.touch.AB)) {
            music.ringTone(466)
        }
        music.stopAllSounds()
    }
})
