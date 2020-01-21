class PoisonFish extends Fish {

  constructor(options){
    super(options);
    this.imageUriRight = '/images/poison_fish_right.png';
    this.imageUriLeft = '/images/poison_fish_left.png';
    this.isPoison = true;
  }

  onClick(event) {
    this.kill();
  }
}
