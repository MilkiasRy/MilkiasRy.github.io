var objectCreater=(function(){
"use strict"
function CreateBicylePrototype(){
    this.speed=0;
} 
//speed dicrease
CreateBicylePrototype.prototype.applyBrake=function(x){
    this.speed=this.speed-x;
};
//speed increase
CreateBicylePrototype.prototype.speedUp=function(x){
    this.speed=this.speed+x;
    


};
var createMountainBikePrototype=new CreateBicylePrototype();
 createMountainBikePrototype.gear=1;
 createMountainBikePrototype.setGear=function(x){
     this.gear=x;
 }
var start=function(){
    var bicyle=new CreateBicylePrototype();
    console.log(bicyle.speed);
    bicyle.speedUp(5);
    bicyle.applyBrake(2);
    console.log(bicyle.speed);
    var mountainBike=Object.create(createMountaibBikeProtoType);
    mountainBike.setGear(13);
    console.log(mountainBike.gear);
    
}
start();




})()