function Particula(init) {
    this.x = init;
    this.y = init;
    this.incx = function() {
    this.x += 3;
    }
   }
   var p1 = new Particula(1);
   var p2 = new Particula(2);
   p2.incx()
   var w = p1.x + p2.y
   console.log(w)
   console.log(p2.x)
   