export const dudePlayer = {
  states: {},
  preload: (game) => {
    game.load.spritesheet('dude',
      'images/dude.png',
      { frameWidth: 32, frameHeight: 48 }
    );
  },
  create: (game) => {
    dudePlayer.states.player = game.physics.add.sprite(100, 450, 'dude')
    dudePlayer.states.player.setBounce(0.2)
    dudePlayer.states.player.setCollideWorldBounds(true)
    // dudePlayer.states.player.body.setGravityY(300)
    dudePlayer.animations(game)    
  },
  update: (game) => {
    dudePlayer.controller(game)
  },
  animations: (game) => {
    game.anims.create({
      key: 'left',
      frames: game.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    })
    game.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    })
    game.anims.create({
      key: 'right',
      frames: game.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    })
  },
  controller: (game) => {
    dudePlayer.states.cursors = game.input.keyboard.createCursorKeys()
    if (dudePlayer.states.death) {
      dudePlayer.states.player.setVelocityX(0)
      return
    }
    if (dudePlayer.states.cursors.left.isDown) {
      dudePlayer.states.player.setVelocityX(-160)
      dudePlayer.states.player.anims.play('left', true)
    }
    else if (dudePlayer.states.cursors.right.isDown) {
      dudePlayer.states.player.setVelocityX(160)
      dudePlayer.states.player.anims.play('right', true)
    }
    else {
      dudePlayer.states.player.setVelocityX(0)
      dudePlayer.states.player.anims.play('turn')      
    }
    // Jump
    if (dudePlayer.states.cursors.up.isDown && dudePlayer.states.player.body.touching.down) {
      dudePlayer.states.player.setVelocityY(-330);
    }
  }
}