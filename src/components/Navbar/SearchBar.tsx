import React, { useState } from "react";
import { Input } from "../../components";
// import axios from "axios";
// import baseApi from "../../api/baseApi";

interface SearchBar {
  title: string;
  value: string;
}

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value: string) => {
    fetch("https://revou-finalproject-backend-production.up.railway.app/api")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const results = json.filter((title: string) => {
          return value && title && title.toLowerCase().includes(value);
        });
        console.log(results);
      });
  };

  const handleChange = (value: React.SetStateAction<string>) => {
    setInput(value);
    // fetchData (value);
  };

  return (
    <div className="flex flex-row  gap-10">
      <div className="flex flex-row gap-0">
        <Input
          className="p-1 bg-green-400 text-black rounded-bl-xl rounded-tl-xl "
          placeholder="Search business ... "
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="p-1 bg-yellow-500 text-black rounded-br-xl rounded-tr-xl ">
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
