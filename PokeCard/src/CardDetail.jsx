import { Type } from "./Type";

export const CardDetail = ({ dataLink,search }) => {
  console.log(dataLink);

  const filteredData=dataLink.filter((curCard)=>curCard.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <section>
      <ul className="grid gap-8 max-md:grid-cols-1 max-lg:grid-cols-2 min-lg:grid-cols-3">
        {filteredData.map((item,index) => {
          
          return (
            <li
              key={item.id}
              className={`w-[360px] flex flex-col px-5 py-8 rounded-lg shadow-[inset_0_0_5px_rgba(0,0,0,0.4)] hover:scale-115 transition-all hover:backdrop-blur-sm bg-white`}
            >
              <h2 className="flex justify-center items-center h-10 w-10 text-2xl font-serif shadow-[inset_0_0_5px_rgba(0,0,0,0.23)] rounded-full">
                {index+1}
              </h2>
              <div className=" flex flex-col justify-center items-center">
                <img
                  src={item.sprites.other.dream_world.front_default}
                  alt={item.name}
                  className="h-28 w-28"
                />
                <h2 className="text-xl font-semibold my-2.5 capitalize">
                  {item.name}
                </h2>

                <Type item={item}/>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
