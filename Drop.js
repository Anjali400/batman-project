class Drop {
    constructor(x, y) {
 
        var options ={
            restitution:0,
            isStatic:false,
            friction:0.1
        }
       
      
        this.body = Bodies.circle(x, y,options); 
          World.add(world, this.body);      
        this.image=loadImage("1.png,2,png,3,png,4.png")
 
      

    }
    updateY() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        
        imageMode(CENTER);
        image(this.image,0,100,100);
        pop();
    }

};