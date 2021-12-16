class Slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        Stifness:0.04,
        length:10
    }
    this.sling=Constraint.create(options)
    //World.add(world,chain)
    World.add(world, this.sling);
}

 
display(){
var pointA=this.sling.bodyA.position;
var pointB=this.pointB;
strokeWeight(4);
//line(pointA.x, pointA.y, pointB.x, pointB.y)
  line(pointA.x, pointA.y, pointB.x, pointB.y);
}

}