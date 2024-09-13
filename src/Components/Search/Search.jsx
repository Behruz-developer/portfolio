import React, { useState } from 'react';
import infoStore from "../../store/infoId";

const Search = () => {
  const search = infoStore((state) => state.search);
  const setSearch = infoStore((state) => state.setSearch);

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    console.log(inputValue);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    if (value.endsWith(' ') && !value.endsWith(' , ')) {
      value = value.trim() + ' , ';
    }
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace' && inputValue.endsWith(' , ')) {
      setInputValue(inputValue.slice(0, -3));
      e.preventDefault();
    }
  };

  return (
    <div className="search">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search_input"
            placeholder="Keywords"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
