export const Type = ({ item }) => {
  const types = item.types.map((data) => data.type.name);

  const bgColor = types.includes("grass")
    ? "bg-green-500"
    : types.includes("fire")
      ? "bg-red-500"
      : types.includes("water")
        ? "bg-blue-500"
        : types.includes("electric")
          ? "bg-yellow-500"
          : "bg-gray-400/50";
  return (
    <>
      <p
        className={`${bgColor} px-2.5 py-1 rounded-full font-serif mb-2.5 capitalize text-white`}
      >
        <span>{types.join("/")}</span>
      </p>
      <div className="grid grid-cols-2 gap-2 text-md font-mono">
        <p>
          Height: <span className="font-medium">{item.height}</span>
        </p>
        <p>
          Weight: <span className="font-medium">{item.weight}</span>
        </p>
        <p>
          Experience:
          <span className="font-medium">{item.base_experience}</span>
        </p>
        <p className="flex items-center">
          Ability:
          <span className="font-medium capitalize">
            {item.abilities[0].ability.name}
          </span>
        </p>
      </div>
    </>
  );
};
