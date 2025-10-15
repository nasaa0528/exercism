//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a,b,c) {
	  this.a = a; 
	  this.b = b; 
	  this.c = c; 
  }

  isEquilateral() {
	  if (this.isTriangle()) 
	  	return (this.a === this.b && this.b == this.c) ? true : false; 
	  return false; 
  }

  isIsosceles() {
	  if (this.isTriangle())
	  	return (this.a === this.b || this.b === this.c || this.a === this.c) ? true : false; 
	  return false; 
  }

  isScalene() {
	  if (this.isTriangle())
	  	return (this.a !== this.b && this.b !== this.c && this.a !== this.c) ? true : false;
	  return false; 
  }
  isTriangle(){
	return ((this.a === 0 && this.b === 0 && this.c === 0) || (this.a + this.b) < this.c || (this.b + this.c) <this.a || (this.a + this.c) < this.b) ? false : true; 
  }
}
