def on_button_pressed_a():
    if True:
        basic.show_string("Stop")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_every_interval():
    basic.show_string("hello")
loops.every_interval(1000, on_every_interval)
