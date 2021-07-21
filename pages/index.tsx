import { useState } from "react";
import ShipList from "../components/ShipList";
import Comparision from "../components/Comparison";
import ships from "../dummyData/ships";
import Ship from "../types/ship";
import styles from "../styles/index.module.scss";

const App: React.FC = () => {
  const [state, setState] = useState<"selection" | "comparision">("selection");
  const [shipsToCompare, setShipsToCompare] = useState<Ship[]>([]);
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="bg-secondary text-white px-4 py-3 d-flex align-items-center justify-content-center">
        <h1 className={`${styles.title} text-primary bg-secondary`}>
          Star wars ships
        </h1>
      </nav>
      <main
        className={`${styles.main} d-flex flex-column justify-content-center bg-gray`}
      >
        {state === "selection" ? (
          <ShipList
            ships={ships}
            setState={setState}
            setShipToCompare={setShipsToCompare}
            shipsToCompare={shipsToCompare}
          />
        ) : (
          <Comparision setState={setState} ships={shipsToCompare} />
        )}
      </main>
      <footer className="bg-secondary text-white text-center">
        <p className="my-1 font-weight-bold">2021</p>
      </footer>
    </div>
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
