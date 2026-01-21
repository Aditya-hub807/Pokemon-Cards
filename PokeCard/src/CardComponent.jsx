import { useEffect, useState } from "react";
import { CardDetail } from "./CardDetail";

export const CardComponent = ({ apiData ,search,setSearch}) => {
  const [link, setLink] = useState([]);
  useEffect(() => {
    const fetchAllDetails = async () => {
      try {
        const promises = apiData.results.map((pokemon) => {
          return fetch(pokemon.url).then((res) => res.json());
        });
        const allDetails = await Promise.all(promises);
        setLink(allDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllDetails();
  }, [apiData]);
  return <CardDetail dataLink={link} search={search} setSearch={setSearch}/>;
};
