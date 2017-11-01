"use strict";
function ferry(carLimit,peopleLimit){
  var carCapacity = carLimit;
  var peopleCapacity = peopleLimit;
  this.onBoard = { peopleOnboard:0, carsOnboard:[]};
  var id = 1
  this.board = function(car){
    if (this.onBoard.peopleOnboard+car.passangers <= peopleCapacity && this.onBoard.carsOnboard+1 <= carCapacity) {
      if(typeof(this.onBoard[car.color]) == 'undefined'){
        this.onBoard[car.color] = {};
        this.onBoard[car.color][car.passangers] = {};
        this.onBoard[car.color][car.passangers] = 1;
        this.onBoard.carsOnboard.push(JSON.stringify(car));
        this.onBoard.peopleOnboard += car.passangers;
        return "accepted";
      }else {
        if(typeof(this.onBoard[car.color][car.passangers]) == "undefined"){
          this.onBoard[car.color][car.passangers] = 1;
          this.onBoard.carsOnboard.push(JSON.stringify(car));
          return "accepted";
        }else {
          this.onBoard.carsOnboard.push(JSON.stringify(car));
          if(this.onBoard[car.color][car.passangers]%5 == 0) return "half price!";
          else if(this.onBoard[car.color][car.passangers]%7 == 0) return "you go free!"
          else return "accepted";
        }
      }
    }else {
      return "rejected";
    }
  };
  // return
}
module.exports = ferry;
var newFerry = new ferry(10,15);
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"blue", passangers:4}));
console.log(newFerry.board({color:"red", passangers:4}));
console.log(newFerry.onBoard);
