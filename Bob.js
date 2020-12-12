class Bob{

    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
this.body = Bodies.circle(x,y,radius,options)
this.radius=40


World.add(world,this.body)

    }
display(){
    var angle=this.body.angle
    var pos= this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    fill("blue")
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    
    
    pop();
}



}