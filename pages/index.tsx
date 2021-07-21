import { useState } from "react";
import ShipList from "../components/ShipList";
import Comparision from "../components/Comparison";
import Ship from "../types/ship";
import styles from "../styles/index.module.scss";

const Nav: React.FC = () => {
  return (
    <nav className="bg-secondary text-white px-4 py-3 text-center border-bottom border-primary">
      <h1 className={`${styles.title} text-primary bg-secondary m-auto`}>
        Star wars ships
      </h1>
      <div className="text-primary">
        In some far-far away galaxy someone decided to compare all starships...
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-primary text-center border-top border-primary">
      <b className="py-1 d-inline-block">2021</b>
    </footer>
  );
};

const App: React.FC<{ ships: any[] }> = ({ ships }) => {
  //should be a proper type guard for every field
  if (ships[0]["name"]) ships as Ship[];
  const [state, setState] = useState<"selection" | "comparision">("selection");
  const [shipsToCompare, setShipsToCompare] = useState<Ship[]>([]);
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
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
      <Footer />
    </div>
  );
};

export default App;

export const getStaticProps = async () => {
  //do no trust the API
  const ships: any = [];
  let initialLink = await fetch("https://swapi.dev/api/starships/?page=1");
  const parsedData = await initialLink.json();
  let url = parsedData.next;
  ships.push(...parsedData.results);
  while (url !== null) {
    let currentLink = await fetch(url);
    const parsedData = await currentLink.json();
    url = parsedData.next;
    ships.push(...parsedData.results);
  }
  return {
    props: {
      ships,
    },
  };
};
