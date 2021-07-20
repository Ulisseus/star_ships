import ShipList from "../components/ShipList";
import ships from "../dummyData/ships";

const App: React.FC = () => {
  return (
    <>
      <h1>Star wars ship comparison</h1>
      <ShipList ships={ships} />
    </>
  );
};

export default App;

//export const getStaticProps = async () => {
//const ships: any = [];
//let current = await fetch("https://swapi.dev/api/starships/?page=1");
//const parsed = await current.json();
//let url = parsed.next;
//ships.push(parsed.results);
//while (url !== null) {
//let current = await fetch(url);
//const parsed = await current.json();
//url = parsed.next;
//ships.push(parsed.results);
//}

//return {
//props: {
//ships,
//},
//};
//};
