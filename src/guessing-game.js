class GuessingGame {
    constructor() {
        this.min;
        this.mid;
        this.max;
      }
      
      
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
      
      guess() {
    
        this.mid = Math.round(this.min + (this.max - this.min) / 2);
        // console.log(`this.min: ${this.min} this.max: ${this.max} this.mid: ${this.mid}`);
        return this.mid;
    
      }
    
      lower() {
        this.max = this.mid;
      }
    
      greater() {
        this.min = this.mid;
      }
}

module.exports = GuessingGame;
