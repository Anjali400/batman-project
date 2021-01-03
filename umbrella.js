class umbrella {
    constructor(x, y) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.circle(x,y, options);
        World.add(world, this.body);
        this.image=loadImage("walking_1.png")
       
    }
    display() {
      
      
        imageMode(CENTER);
       
        image(this.image,0,100,100);
    }
};