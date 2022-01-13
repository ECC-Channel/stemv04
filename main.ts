input.onButtonPressed(Button.A, function () {
    Spacship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bu = game.createSprite(Spacship.get(LedSpriteProperty.X), Spacship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Bu.move(-4)
        basic.pause(500)
    }
    if (Bu.isTouching(alien)) {
        game.addScore(1)
        alien.set(LedSpriteProperty.X, randint(0, 4))
    }
})
input.onButtonPressed(Button.B, function () {
    Spacship.change(LedSpriteProperty.X, 1)
})
let alien_bullet: game.LedSprite = null
let shoot = 0
let Bu: game.LedSprite = null
let alien: game.LedSprite = null
let Spacship: game.LedSprite = null
Spacship = game.createSprite(2, 4)
alien = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    shoot = randint(0, 4)
    if (shoot == 1) {
        alien_bullet = game.createSprite(alien.get(LedSpriteProperty.X), alien.get(LedSpriteProperty.Y))
        for (let index = 0; index < 4; index++) {
            alien_bullet.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        if (alien_bullet.isTouching(Spacship)) {
            game.removeLife(1)
        }
        alien_bullet.delete()
    }
    basic.pause(1000)
})
