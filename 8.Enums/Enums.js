/////////////// Code.1 | Numeric Enums - Default ////////////
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   };
//   let currentDirection = CardinalDirections.South;
//   // North is the first value so it logs '0'
//   console.log(currentDirection);
//   // throws error when commented in as 'North' is not a valid enum
//   // currentDirection = 'North'; 
//   // Error: "North" is not assignable to type 'CardinalDirections'.
///////////// Code.2 | Numeric Enums - Initialized ///////////
//   enum CardinalDirections {
//     North = 4,
//     East,
//     South,
//     West
//   };
//   // logs 1 since we initialized the first value to something other than '0'
//   console.log(CardinalDirections.North);
//   // logs 4 as it continued on from the initial '1' value
//   console.log(CardinalDirections.West);
///////////////Code.3 | Numeric Enums - Fully Initialized //////
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   };
//   // logs 404
//   console.log(StatusCodes.NotFound);
//   // logs 200
//   console.log(StatusCodes.Success);
////////////////////Code.4 | String Enums ////////////////////
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
    CardinalDirections[CardinalDirections["Year"] = 2024] = "Year";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
// logs "West"
console.log(CardinalDirections.Year);
// Note -- Technically, you can mix and match string and numeric enum values
