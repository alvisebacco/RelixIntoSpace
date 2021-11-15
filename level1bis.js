class level1bis extends Phaser.Scene{
    constructor() 
    {
        super('playGame')
        this.powerEngine=1000
        this.powerShot=200
    }

    create()
    {
        this.start = this.add.image(450, 200, 'start')
        this.title = this.add.image(450, 100, 'title')
        this.txt = this.add.text(20,20, 'Game loaded')
        this.explain = this.add.text(400,900, 'SPACEBAR = SHOT\n\nARROW = MOVE')
        this.anna = this.physics.add.sprite(500, 1300, 'anna')
        this.villan = this.physics.add.sprite(100, 400, 'villan')
        this.anna.play('thrust')
        this.villan.play('villan')
        this.anna.setInteractive()
        this.cursorKeys = this.input.keyboard.createCursorKeys()
        this.anna.setCollideWorldBounds(true)
        this.villan.setCollideWorldBounds(true)
    }
    
    update()
    {
        this.moveAnnaManagerUP()
        this.moveAnnaManagerRL()
        this.if_space_is_pressed_it_will_shot()
        this.move_villan()
    }

    if_space_is_pressed_it_will_shot()
    {
        if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.space))
        {
           this.fireball()
        }
    }

    moveAnnaManagerUP()
    {
        if(this.cursorKeys.up.isDown)
        {
            this.anna.setVelocityY(-this.powerEngine)
            this.anna.play('accelerate')
         }
        else if(this.cursorKeys.down.isDown)
        {
            this.anna.setVelocityY(this.powerEngine)
            this.anna.play('lr');
        }
        
        else if(this.cursorKeys.up.isUp)
        {
            this.anna.setVelocityY(0)
        }
        else if(this.cursorKeys.down.isUp)
        {
            this.anna.setVelocityY(0)
        }
        
    }    
    moveAnnaManagerRL()
    {
        if(this.cursorKeys.right.isDown)
        {
            this.anna.setVelocityX(this.powerEngine)
            this.anna.play('annaFlying')
        }
        else if(this.cursorKeys.left.isDown)
        {
            this.anna.setVelocityX(-this.powerEngine)
            this.anna.play('annaFlying')
        }
        else if(this.cursorKeys.left.isUp)
        {
            this.anna.setVelocityX(0)
        }
        else if(this.cursorKeys.right.isUp)
        {
            this.anna.setVelocityX(0)
        }
    }

    fireball()
    {
        var vel = 1000
        var fire_ball = new Ball(this, vel)
        this.set_explosion(fire_ball, this.villan)
    }

    set_explosion(missile, villano)
    {
        this.physics.add.overlap(missile, villano, this.destroy, null, this)
    }

    destroy(villano, missile)
    {
        villano.play('explosion')
        missile.play('explosion')
        this.villan.body.enable = false
        missile.destroy()
        this.destroyalltitle()
        this.time.addEvent({ delay: 2000, callback: this.level2, callbackScope: this, loop: true });
        
    }

    level2()
    {
        this.scene.start('levelUnderwater');
    }

    destroyalltitle()
    {
        this.start.destroy()
        this.explain.destroy()
        this.title.destroy()
        this.txt.destroy()
    }

    move_villan()
    {
        this.villan.x += 1
        if (this.villan.x > 900)
        {
            this.resetShipPos()
        }
    }

    resetShipPos()
    {
        this.villan.x = 0
    }
}