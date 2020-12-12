class Rope{
    constructor(bodyA, pointB, offsetX, offsetY){

this.offsetX=offsetX;
this.offsetY=offsetY;

        var options = {
bodyA: bodyA,
pointB: pointB,
lenght:8,
stiffness:0.04
        }
        this.rope= Constraint.create(options)
    World.add(world,this.rope)
    }
display(){
    if(this.rope.bodyA){
    var pointA = this.rope.bodyA.position
    var pointB = this.rope.pointB

    strokeWeight(3)
    stroke("black")
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
}