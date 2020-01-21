class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUriRight = '/images/switch_fish_right.png';
    this.imageUriLeft = '/images/switch_fish_left.png';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
