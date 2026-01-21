export const Search = ({search,setSearch}) => {
  return (
    <div className="py-15 flex items-center">
      <input
        type="search"
        placeholder="Search Pokemon....."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="min-w-xs px-2.5 py-1.5 rounded-lg shadow-[inset_0_0_5px_rgba(0,0,0,0.4)] outline-0 bg-white"
      />
    </div>
  );
};
