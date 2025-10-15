export class Clock {
  constructor(h=0, m=0) {
    this.h = h;
    this.m = m;
  }

  toString(){
    this.syncTime();
    return ((this.h < 10) ? `0${this.h}` : this.h) + ":" +
           ((this.m < 10) ? `0${this.m}` : this.m);
  }

  syncTime(){
    (this.m > 0) ? (this.h += Math.floor(this.m / 60)) :
      (this.h += Math.ceil( this.m / 60 ))
    this.m %= 60;

    if (this.m < 0) {
      this.m += 60;
      this.h--;
    }

    this.h %= 24;
    if(this.h < 0)
      this.h += 24;
  }

  plus(m) {
    this.m += m;
    return this;
  }

  minus(m) {
    this.m -= m;
    return this;
  }

  equals(time){
    return this.toString() === time.toString();
  }
}
