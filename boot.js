var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: [level1, level1bis, levelUnderwater],
    physics: 
    {
        default: 'arcade',
        arcade: 
        {
            debug: true
        }
    },
};
    var cursor;
    var game = new Phaser.Game(config);

class boot extends Phaser.Scene
{
    constructor()
    {
        super('BootGame')
    }
}