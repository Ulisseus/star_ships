type Ship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export default Ship;

const a: Ship = {
  name: "Slave 1",
  model: "Firespray-31-class patrol and attack",
  manufacturer: "Kuat Systems Engineering",
  cost_in_credits: "unknown",
  length: "21.5",
  max_atmosphering_speed: "1000",
  crew: "1",
  passengers: "6",
  cargo_capacity: "70000",
  consumables: "1 month",
  hyperdrive_rating: "3.0",
  MGLT: "70",
  starship_class: "Patrol craft",
  pilots: ["https://swapi.dev/api/people/22/"],
  films: ["https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/5/"],
  created: "2014-12-15T13:00:56.332000Z",
  edited: "2014-12-20T21:23:49.897000Z",
  url: "https://swapi.dev/api/starships/21/",
};
