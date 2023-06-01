controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . . . . . . . . 
        . 5 1 . . . . . 1 5 . 
        5 5 5 . . . . . 5 5 5 
        5 5 5 5 1 . 1 5 5 5 5 
        5 f 5 5 5 . 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 . . . . 
        `,img`
        . . 5 . . . . . 5 . . 
        . 5 5 1 . . . 1 5 5 . 
        5 5 5 5 1 . 1 5 5 5 5 
        5 5 5 5 5 . 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 . . . . 
        `,img`
        . . 5 5 5 1 5 5 5 . . 
        . 5 5 5 5 . 5 5 5 5 . 
        5 5 5 5 5 1 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 . . . . 
        `,img`
        . . . 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 . . . . 
        `,img`
        . . 5 5 5 1 5 5 5 . . 
        . 5 5 5 5 . 5 5 5 5 . 
        5 5 5 5 5 1 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 . . . . 
        `,img`
        . . 5 . . . . . 5 . . 
        . 5 5 1 . . . 1 5 5 . 
        5 5 5 5 1 . 1 5 5 5 5 
        5 5 5 5 5 . 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 . . . . 
        `],
    100,
    true
    )
    PacMan.setVelocity(0, -50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . 5 5 5 5 5 5 . . . 
        . 5 5 5 f 1 5 5 5 . . 
        . 1 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 5 . 
        . . . 1 5 5 5 5 5 5 5 
        . . . . . 5 5 5 5 5 5 
        . . . 1 5 5 5 5 5 5 5 
        . . . 5 5 5 5 5 5 5 . 
        . 1 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 . . . 
        `,img`
        . . 5 5 5 5 5 5 . . . 
        . 5 5 5 f 1 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 1 5 5 5 5 5 5 5 5 . 
        . . 1 5 5 5 5 5 5 5 5 
        . . . . 5 5 5 5 5 5 5 
        . . 1 5 5 5 5 5 5 5 5 
        . 1 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 . . . 
        `,img`
        . . 5 5 5 5 5 5 . . . 
        . 5 5 5 f 1 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        1 . 1 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 . . . 
        `,img`
        . . 5 5 5 5 5 5 . . . 
        . 5 5 5 f 1 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 . . . 
        `,img`
        . . 5 5 5 5 5 5 . . . 
        . 5 5 5 f 1 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        1 . 1 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 . . . 
        `,img`
        . . 5 5 5 5 5 5 . . . 
        . 5 5 5 f 1 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 1 5 5 5 5 5 5 5 5 . 
        . . 1 5 5 5 5 5 5 5 5 
        . . . . 5 5 5 5 5 5 5 
        . . 1 5 5 5 5 5 5 5 5 
        . 1 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 . . . 
        `],
    100,
    true
    )
    PacMan.setVelocity(-50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . 5 5 5 5 5 5 . . 
        . . 5 5 5 1 f 5 5 5 . 
        . 5 5 5 5 5 5 5 5 1 . 
        . 5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 1 . . . 
        5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 1 . . . 
        . 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 1 . 
        . . 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 . . 
        `,img`
        . . . 5 5 5 5 5 5 . . 
        . . 5 5 5 1 f 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 1 . 
        5 5 5 5 5 5 5 5 1 . . 
        5 5 5 5 5 5 5 . . . . 
        5 5 5 5 5 5 5 5 1 . . 
        . 5 5 5 5 5 5 5 5 1 . 
        . 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 . . 
        `,img`
        . . . 5 5 5 5 5 5 . . 
        . . 5 5 5 1 f 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 1 . 1 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 . . 
        `,img`
        . . . 5 5 5 5 5 5 . . 
        . . 5 5 5 1 f 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 . . 
        `,img`
        . . . 5 5 5 5 5 5 . . 
        . . 5 5 5 1 f 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 1 . 1 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 . . 
        `,img`
        . . . 5 5 5 5 5 5 . . 
        . . 5 5 5 1 f 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 1 . 
        5 5 5 5 5 5 5 5 1 . . 
        5 5 5 5 5 5 5 . . . . 
        5 5 5 5 5 5 5 5 1 . . 
        . 5 5 5 5 5 5 5 5 1 . 
        . 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 5 . . 
        `],
    100,
    true
    )
    PacMan.setVelocity(50, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PacMan,
    [img`
        . . . . 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 . 5 5 5 5 5 
        5 5 5 5 1 . 1 5 5 5 5 
        5 5 5 . . . . . 5 5 5 
        . 5 1 . . . . . 1 5 . 
        . . . . . . . . . . . 
        `,img`
        . . . . 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 . 5 5 5 5 5 
        5 5 5 5 1 . 1 5 5 5 5 
        . 5 5 1 . . . 1 5 5 . 
        . . 5 . . . . . 5 . . 
        `,img`
        . . . . 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 1 5 5 5 5 5 
        . 5 5 5 5 . 5 5 5 5 . 
        . . 5 5 5 1 5 5 5 . . 
        `,img`
        . . . . 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . . 5 5 5 5 5 . . . 
        `,img`
        . . . . 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 1 5 5 5 5 5 
        . 5 5 5 5 . 5 5 5 5 . 
        . . 5 5 5 1 5 5 5 . . 
        `,img`
        . . . . 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 1 5 5 5 5 5 5 5 5 5 
        5 f 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 . 5 5 5 5 5 
        5 5 5 5 1 . 1 5 5 5 5 
        . 5 5 1 . . . 1 5 5 . 
        . . 5 . . . . . 5 . . 
        `],
    100,
    true
    )
    PacMan.setVelocity(0, 50)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(1000)
    scene.cameraShake(3, 500)
    info.changeLifeBy(-1)
    PacMan.setPosition(135, 248)
    ghost1.setPosition(125, 140)
    ghost2.setPosition(140, 140)
})
let ghost2: Sprite = null
let ghost1: Sprite = null
let PacMan: Sprite = null
info.setLife(3)
PacMan = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 1 f 5 5 5 . . 
    . . . 5 5 5 5 1 f 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 1 . . 
    . . 5 5 5 5 5 5 5 1 . . . . 
    . . 5 5 5 5 5 1 . . . . . . 
    . . 5 5 5 5 5 5 5 1 . . . . 
    . . 5 5 5 5 5 5 5 5 5 1 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . 
    . . . . 5 5 5 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
PacMan.setPosition(135, 248)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(PacMan)
ghost1 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 . . . 
    . . 3 3 a a 3 a a 3 3 . . 
    . . 3 3 1 1 3 1 1 3 3 . . 
    . . 3 3 1 f 3 1 f 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 . 3 3 3 . 3 3 . . 
    . . 3 . . . 3 . . . 3 . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
ghost1.setPosition(125, 140)
ghost1.follow(PacMan, 50)
ghost2 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . 
    . . 2 4 4 2 2 2 4 4 2 . . 
    . . 2 2 1 4 2 4 1 2 2 . . 
    . . 2 2 1 f 2 1 f 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 . 2 2 2 . 2 2 . . 
    . . 2 . . . 2 . . . 2 . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
ghost2.setPosition(140, 140)
ghost2.follow(PacMan, 45)
