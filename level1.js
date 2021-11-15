class level1 extends Phaser.Scene{
    constructor()
    {
        super('bootGame')
    }

    preload()
    {
        this.load.image('start', 'assets/press_start.png');
        
        this.load.image('title', 'assets/title.png');
        this.load.spritesheet('anna', 'assets/newannamini/newannamini.png', { frameWidth: 92, frameHeight: 92});
        this.load.spritesheet('ball', 'assets/nutronball/nutronball.png', { frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('explosion', 'assets/Explosion/Explosion.png', { frameWidth: 92, frameHeight: 92});
        this.load.spritesheet('villan', 'assets/villan/villan.png', { frameWidth: 96, frameHeight: 96});
        //level UNDERWATER
        this.load.image('underwater_title', 'assets/underwaterTitle.png');
        this.load.image('underwater', 'assets/underwater/underwater.jpg');
    }

    create()
    {

    

        this.add.text(20, 20, 'Loading.....');
        this.scene.start('playGame');

        
        this.anims.create(
        {
            key: 'annaFlying',
            frames: this.anims.generateFrameNumbers('anna', {start:7, end:8}),
            frameRate: 24,
            repeat: -1
        });

        this.anims.create(
            {
                key: 'villan',
                frames: this.anims.generateFrameNumbers('villan', {start:0, end:2}),
                frameRate: 24,
                repeat: -1
            });

        this.anims.create(
        {
                key: 'ball',
                frames: this.anims.generateFrameNumbers('ball', {start:0, end:2}),
                frameRate: 24,
                repeat: -1
        });

        this.anims.create(
        {
            key: 'thrust',
            frames: this.anims.generateFrameNumbers('anna', {start:8, end:9}),
            frameRate: 24,
            repeat: -1
        });

        this.anims.create(
        {
                key: 'accelerate',
                frames: this.anims.generateFrameNumbers('anna', {start:1, end:9}),
                frameRate: 60,
                repeat: -1
        });
        this.anims.create(
        {
            key: 'lr',
            frames: this.anims.generateFrameNumbers('anna', {start:3, end:4}),
            frameRate: 24,
            repeat: -1
        });
        this.anims.create(
            {
                key: 'explosion',
                frames: this.anims.generateFrameNumbers('explosion', {start:1, end:10}),
                frameRate: 24,
                repeat: 2
            });
        
        
    }
}