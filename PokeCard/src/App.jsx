import { useEffect, useState } from "react";
import { CardComponent } from "./CardComponent";
import { Search } from "./Search";

function App() {
  const [apiData, setApiData] = useState(null);
  const [search, setSearch] = useState("");

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemon();
  }, []);

  if (!apiData) {
    return <h4>Loading...</h4>;
  }

  return (
    <section className="min-h-screen w-full bg-[#FFF8DE] flex flex-col items-center pb-10">
      <h1 className="pt-10 text-2xl font-bold">Search Pokemon </h1>
      <Search search={search} setSearch={setSearch} />

      <CardComponent apiData={apiData} search={search} setSearch={setSearch} />
    </section>
  );
}

export default App;
