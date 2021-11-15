class levelUnderwater extends Phaser.Scene
{
    constructor()
    {
        super('levelUnderwater')
        this.powerEngine=250
    }
    
    create()
    {
        
        this.underwater_background = this.add.image(512, 384, 'underwater')
        this.txt = this.add.text(20,20, 'SCORE: ')
        this.cursorKeys = this.input.keyboard.createCursorKeys()
        this.anna = this.physics.add.sprite(500, 1300, 'anna')
        this.anna.play('thrust')
        this.underwater_title = this.add.image(500, 150, 'underwater_title')
        this.anna.setCollideWorldBounds(true)
        this.delay(4000, this.destroy_shit)
        
    }

    update()
    {
        this.moveAnnaManagerRL()
        this.moveAnnaManagerUP()
        this.if_space_is_pressed_it_will_shot()
    }

    evil()
    {
        this.villan = this.physics.add.sprite(200, 100, 'villan')
        this.villan.play('villan')
        this.villan.setVelocityY(200)
        this.villan.setVelocityX(200)
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
            this.anna.setVelocityY(150)
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

    if_space_is_pressed_it_will_shot()
    {
        if(Phaser.Input.Keyboard.JustDown(this.cursorKeys.space))
        {
           this.underwater_missile()
        }
    }

    underwater_missile()
    {
        var vel = 400
        var fire_ball = new Ball(this, vel)
        this.set_explosion(fire_ball, this.villan)
        
    }

    destroy(villano, missile)
    {
        villano.play('explosion')
        villano.body.enable = false
        missile.destroy()
        this.time.addEvent({ delay: 2000, callback: this.level2, callbackScope: this, loop: true });
    }

    set_explosion(missile, villano)
    {
        this.physics.add.overlap(missile, villano, this.destroy, null, this)
    }

    delay(pause_time, function_to_call)
    {
        this.time.addEvent({ delay: pause_time, callback: function_to_call, callbackScope: this, loop: true });
    }

    destroy_shit()
    {
        this.underwater_title.destroy()
    }

}