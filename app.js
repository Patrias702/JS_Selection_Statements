console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1: Guessing Game


let magicNumber = 6

let guessNumber = prompt("What is the magic number?");

if(guessNumber == magicNumber) {
  console.log("Congrats! You guessed the magic number");
} else if (guessNumber > magicNumber ) {
  console.log("Guess was too high :'( Try Again.") ;
}else if (guessNumber < magicNumber) {
  console.log("Guess was too low :( Try Again");
}


//Exercise 2 : Birth Season

let birthMonth = prompt=("Please insert your birth month:");


switch (birthMonth.toLowerCase()) {
    case "december": 
    case "january": 
    case "february":
      console.log("Winter");
      break;
    case "march":
    case "april":
    case "may":
        console.log("Spring");
        break;
      case "june":
      case "july": 
      case "august":
          console.log("Summer");
         break;
      case "september":
      case "october": 
      case "november":
        console.log("Fall");
        break;
      default:
        console.log("I dont recognize that month....");

}

// Exercise 3: Business Logic between Attire Codes


let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}
  switch (typeId){
    case "01":
      type = "Tank Top";
      break;
    case "02":
      type = "T-Shirt";
      break;
    case "03":
      type = "Long Sleeve";
      break;
      case "04":
        type = "Sweat Shirt";
        break;
      default:
        type ="other";
      }
    


if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BU") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (colorId){
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
    case "RD":
    color = "Red";
    break;
    case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}



if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
  }

  switch (sizeId){
    case "S":
      size = "Small";
      break;
    case "M":
      size = "Medium";
      break;
    case "L":
      size = "Large";
      break;
    case "XL":
      size = "Extra Large";
      break;
    default:
      size = "One Size Fits All";


  }

console.log(`Product: ${size} ${color} ${type}`);








