import React from "react";

const Search = ({ search, setsearch,handelsearch }) => {
  return (
    <div className="bg-blue-800 w-full h-[50px] flex items-center justify-center gap-4" >
      <input
      className="w-[400px] h-[30px] text-center rounded border-red-200"
        type="text"
        placeholder="Enter the city"
        name="search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button onClick={handelsearch} className="bg-red-500 p-1.5 rounded w-[70px]  hover:bg-sky-500 hover:ring-sky-500" >Search</button>
    </div>
  );
};

export default Search;
