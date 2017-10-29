"use strict";
function ferry(carLimit,peopleLimit){
  var carCapacity = carLimit;
  var peopleCapacity = peopleLimit;
  var onBoard = {};
  var id = 1
  this.board = function(car){
    if(typeof(onBoard[car.color][car.passangers]) == 'undefined'){
      onBoard[car.color] = {};
      onBoard[car.color][car.passangers] = {};
      onBoard[car.color][car.passangers] = 1;
    }else {
      onBoard[car.color][car.passangers]++;
    }
  };
  return
}
