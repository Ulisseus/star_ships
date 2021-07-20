import Ship from "../types/ship";
import ships from "../dummyData/ships";

const test = {
  name: "V-wing",
  model: "Alpha-3 Nimbus-class V-wing starfighter",
  manufacturer: "Kuat Systems Engineering",
  cost_in_credits: "102500",
  length: "7.9",
  max_atmosphering_speed: "1050",
  crew: "1",
  passengers: "0",
  cargo_capacity: "60",
  consumables: "15 hours",
  hyperdrive_rating: "1.0",
  MGLT: "unknown",
  starship_class: "starfighter",
  pilots: [],
  films: ["https://swapi.dev/api/films/6/"],
  created: "2014-12-20T20:43:04.349000Z",
  edited: "2014-12-20T21:23:49.961000Z",
  url: "https://swapi.dev/api/starships/75/",
};
const fields = {
  cost_in_credits: "unknown",
  length: "21.5",
  max_atmosphering_speed: "1000",
  crew: "1",
  passengers: "6",
  cargo_capacity: "70000",
  consumables: "1 month",
  hyperdrive_rating: "3.0",
  MGLT: "70",
};

//const parse  = (value:string)=>{
  //if value==='unknown'
//}
//const parseData = (ships: Ship[]): any[] => {
  //const correctlyTypedShips = ships.map((ship) => {
   //return {...ship, length:Number.parseFloat(ship.length),
  //max_atmosphering_speed:Number.parseInt(ship.max_atmosphering_speed),
  //crew:
  //}
  //});
  //return correctlyTypedShips;
//};

//console.log(parseData([test]));
