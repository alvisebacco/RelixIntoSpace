class Ball extends Phaser.GameObjects.Sprite
{
    constructor(scene, vel)
    {
        var x = scene.anna.x
        var y = scene.anna.y-50
        var ballVelocity = vel
        super(scene, x, y, 'ball');
        this.play('ball');
        scene.add.existing(this);
        scene.physics.world.enableBody(this)
        this.body.velocity.y = - ballVelocity
    }
}