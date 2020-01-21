class BiteFish extends Fish {
  constructor(options){
    super(options);
    this.isTasty = false;
    this.imageUriRight = '/images/bite_fish_right.gif';
    this.imageUriLeft = '/images/bite_fish_left.png';
    this.position = options.position;
    this.eaten = 0;
  }
  updateOneTick(){
    super.updateOneTick();
    const tastySnacks = fishtank.getProximateDenizens(this.position, this.height * 0.6).filter(fish => this.isEdible(fish));
    if(tastySnacks.length > 0)
      this.eatFish(tastySnacks);
  }
  isEdible(fish){
    if(fish.isTasty){
      return true;
    } else if(fish instanceof Fish && fish.width < this.width){
      return true;
    } return false;
  }
  eatFish(tastySnacks){
    tastySnacks.forEach(element => {
      if(element.isPoison){
        this.kill();
        this.imageURI = '/images/blood-splatter.png';
      }
      element.kill();
      element.imageUri = '/images/blood-splatter.png';
      this.height += 10;
      this.width += 10;
      this.eaten += 1;
    });
  }
  onClick(){
    if(this.eaten == 0)
      console.log('I must be fed! Spawn the fishes')
    else
      console.log(`Fear me! For I have consumed ${this.eaten} fishes`);
  }
}
