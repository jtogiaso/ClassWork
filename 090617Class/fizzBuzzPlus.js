function translateInt() {
  this.mod = 3;
  this.mapString = '';

  this.setModifier = function(number) {
    this.mod = parseInt(number);
    return this;
  };

  this.setString = function(str) {
    this.mapString = str;
    return this;
  };

  this.processNumber = function(number, defaultValue) {
    return (parseInt(number) % this.mod === 0)
      ? this.mapString
      : defaultValue
  };

  return this;
};


function letterIterator() {
  this.firstChar = 97; // a
  this.lastChar  = 122; // z
  this.increment = true; // decrement if false
  this.nextChar  = null;

  this.setDirection = function(increment) {
    this.increment = (increment);
    return this;
  };

  this.getNextLetter = function() {
    if (null == this.nextChar) {
      this.nextChar = (this.increment ? this.firstChar : this.lastChar);
    } else if (this.increment) {
      this.nextChar = (this.nextChar < this.lastChar ? 1+this.nextChar : this.firstChar);
    } else {
      this.nextChar = (this.nextChar > this.firstChar ? this.nextChar-1 : this.lastChar);
    }
    return String.fromCharCode(this.nextChar);
  };

  return this;
};


function processRange(minNumber, maxNumber) {
  var alpha = new translateInt().setModifier(3).setString('alpha');
  var bet   = new translateInt().setModifier(5).setString('bet');
  var iter  = new letterIterator().setDirection(false);

  for (let i=0; i<=Math.abs(maxNumber - minNumber); i++) {
    let n = minNumber + i;
    let a = alpha.processNumber(n, '');
    let b = bet.processNumber(n, '');
    console.log(a + b || iter.getNextLetter());
  }
};


processRange(1,20);
