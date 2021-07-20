import { useState } from "react";
import ShipList from "../components/ShipList";
import Comparision from "../components/Comparison";
import ships from "../dummyData/ships";

const App: React.FC = () => {
  const [state, setState] = useState<"selection" | "comparision">("selection");
  return (
    <>
      <h1>Star wars ship comparison</h1>
      {state === "selection" ? (
        <ShipList ships={ships} setState={setState} />
      ) : (
        <Comparision setState={setState} />
      )}
    </>
  );
};

export default App;

//export const getStaticProps = async () => {
//const ships: any = [];
//let current = await fetch("https://swapi.dev/api/starships/?page=1");
//const parsed = await current.json();
//let url = parsed.next;
//ships.push(...parsed.results);
//while (url !== null) {
//let current = await fetch(url);
//const parsed = await current.json();
//console.log(parsed);
//url = parsed.next;
//ships.push(...parsed.results);
//}
//return {
//props: {
//ships,
//},
//};
//};
