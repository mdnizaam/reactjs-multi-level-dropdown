import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIon from "../images/search-icon.png";
import data from "../constants/states.json";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    let search = e.target.value;
    if (search) {
      const filteredData = data.filter((item) =>
        item?.name?.toLowerCase()?.includes(search?.toLowerCase())
      );
      console.log("filteredData", filteredData);
      setSearchData(filteredData);
    } else {
      setSearchData([]);
    }
  };

  const handleSearchClick = (value) => {
    if (value) {
      setSearch(value);
      setSearchData([]);
    }
  };
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          placeholder="search here..."
          autoComplete="off"
          value={search}
          onChange={handleChange}
        />
        <div className="search-icon">
          <img src={SearchIon} width={25} />
        </div>
      </div>
      {searchData?.length ? (
        <div className="search-item">
          <ul>
            {searchData.slice(0, 7).map((item) => {
              return (
                <li onClick={() => handleSearchClick(item?.name)}>
                  {item?.name}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
