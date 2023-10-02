import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center gap-x-2">
        <label className=" text-[24px]">Search:</label>
        <input
          placeholder="Search your item"
          type="text"
          autoFocus
          className=" text-[18px] py-[2px] px-[4px] w-[400px] rounded-md outline-none border-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
