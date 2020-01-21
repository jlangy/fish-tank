class Fish extends Denizen {

  constructor(options) {
    super(options);
    this.isTasty = true;
    this.maxSwimSpeed = 100;
    this.makeNewVelocity();
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    var newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }
    return newSpeed;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.imageURI = this.faceCorrectDirection();
    this.timeUntilSpeedChange = randRangeInt(5);
  }

  faceCorrectDirection(){
    if(this.swimVelocity.x < 0){
      return this.imageUriLeft;
    } else {
      return this.imageUriRight;
    }
  }

  kill(){
    super.kill();
    var $victim = $('#' + this.id);
    $victim.attr('src', '/images/blood-splatter.png');
  }

}

