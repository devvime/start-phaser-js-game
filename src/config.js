export const config = (game) => {
  return {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: {
      preload: game.preload,
      create: game.create,
      update: game.update
    }
  }
}

export const states = {
  gameOver: false,
  score: 0,
  scoreText: 'Score: 0'
}