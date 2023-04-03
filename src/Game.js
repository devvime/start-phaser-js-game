import Phaser from "phaser";
import { config, states } from './config'
import { world } from './hierarchy/world'
import { bomb } from './hierarchy/bomb'
import { star } from './hierarchy/star'
import { dudePlayer } from './hierarchy/dude.player'

export default class Game {
  constructor() {
    new Phaser.Game(config(this))
  }
  preload() {
    world.preload(this)
    star.preload(this)
    bomb.preload(this)
    dudePlayer.preload(this)
  }
  create() {
    world.create(this)
    dudePlayer.create(this)
    star.create(this)
    bomb.create(this)
    Game.setCollisions(this)
    states.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' })
  }
  update() {
    if (states.gameOver) this.physics.pause()
    dudePlayer.update(this)
  }
  static setCollisions(game) {
    game.physics.add.collider(dudePlayer.states.player, world.states.platforms)
    game.physics.add.collider(star.states.stars, world.states.platforms)
    game.physics.add.overlap(dudePlayer.states.player, star.states.stars, star.collectStar, null, game)
    game.physics.add.collider(bomb.states.bombs, world.states.platforms)
    game.physics.add.collider(dudePlayer.states.player, bomb.states.bombs, bomb.hitBomb, null, game)
  }
}