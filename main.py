def on_forever():
    if piano.touch() == piano.touch_button(piano.touch.C):
        while piano.touch() == piano.touch_button(piano.touch.C):
            music.ring_tone(262)
        music.stop_all_sounds()
basic.forever(on_forever)
