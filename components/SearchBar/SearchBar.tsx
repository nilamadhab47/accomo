import React from "react";
import { HiLocationMarker } from "react-icons/hi";

type SearchBarProps = {
  filter?: string;
  setFilter?: (value: string) => void;
};

const SearchBar = ({ filter, setFilter }: SearchBarProps) => {
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
  placeholder="Search by title/city/country..."
  type="text"
  value={filter}
  onChange={(e) => setFilter && setFilter(e.target.value)}
/>
<button className="button">Search</button>
    </div>
  );
};

export default SearchBar;
