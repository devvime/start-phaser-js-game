export const world = {
  states: {},
  preload: (game) => {
    game.load.image('sky', 'images/sky.png');
    game.load.image('ground', 'images/platform.png');
  },
  create: (game) => {
    game.add.image(400, 300, 'sky');
    world.states.platforms = game.physics.add.staticGroup();
    world.states.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    world.states.platforms.create(600, 400, 'ground');
    world.states.platforms.create(50, 250, 'ground');
    world.states.platforms.create(750, 220, 'ground');
  },
  update: (game) => {},
  getStates: () => {
    return world.states
  }
}