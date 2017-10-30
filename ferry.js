"use strict";
function ferry(carLimit,peopleLimit){
  var carCapacity = carLimit;
  var peopleCapacity = peopleLimit;
  var onBoard = { peopleOnboard:0, carsOnboard:0};
  var id = 1
  this.board = function(car){
    if (onBoard.peopleOnboard+car.passangers <= peopleCapacity && onBoard.carsOnboard+1 <= carCapacity) {
      if(typeof(onBoard[car.color]) == 'undefined'){
        onBoard[car.color] = {};
        onBoard[car.color][car.passangers] = {};
        onBoard[car.color][car.passangers] = 1;
        onBoard.carsOnboard++;
        onBoard.peopleOnboard += car.passangers;
        console.log(onBoard);
        return "accepted";
      }else {
        if(typeof(onBoard[car.color][car.passangers]) == "undefined"){
          onBoard[car.color][car.passangers] = 1;
          onBoard.carsOnboard++;
          return "accepted";
        }else {
          onBoard[car.color][car.passangers]++;
          console.log(onBoard);
          if(onBoard[car.color][car.passangers]%5 == 0) return "half price!";
          else if(onBoard[car.color][car.passangers]%7 == 0) return "you go free!"
          else return "accepted";
        }
      }
    }else {
      return "rejected";
    }
  };
  // return
}
var newFerry = new ferry(10,15);
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"red", passangers:4}));
