function isTouching(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        //fixedRect.shapeColor = "red";
       // movingRect.shapeColor = "red";
       return true;
  
    }else{
        return false;
        //fixedRect.shapeColor = "green";
        //movingRect.shapeColor = "green";
    }
  
  }
  
  function bounceOff(object1,object2){
  if (isTouching(object1,object2)){
    object1.velocityX = -object1.velocityX
    object2.velocityX = -object2.velocityX
  }
  
  
  }