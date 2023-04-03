import { states } from "../config";
import { dudePlayer } from "./dude.player";

export const bomb = {
  states: {},
  preload: (game) => {
    game.load.image('bomb', 'images/bomb.png');
  },
  create: (game) => {
    bomb.states.bombs = game.physics.add.group()
  },
  hitBomb: (player, bomb) => {
    // game.physics.pause()
    dudePlayer.states.death = true
    dudePlayer.states.player.setTint(0xff0000)
    dudePlayer.states.player.anims.play('turn')
    states.gameOver = true
  }
}