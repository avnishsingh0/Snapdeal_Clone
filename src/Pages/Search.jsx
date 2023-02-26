import '../Components/Navbar/Navbar.scss'
import '../CSS/Search.css'
import React, { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'

import {
    AiOutlineClose
  } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(-1);

    const handleChenge = (e) => {
        setSearch(e.target.value);
      };
      useEffect(() => {
        if (search !== "") {
          fetch(` https://snapdeal.onrender.com/products?q=${search}`)
            .then((res) => res.json())
            .then((data) => setSearchData(data));
        }
      }, [search]);
      const handleClose = () => {
        setSearch("");
        setSearchData([]);
        setSelectedItem(-1)
        window.close()
      };
      const handlekeyDown = (e) => {
        if(selectedItem < searchData.length){
            if (e.key === "ArrowUp" && selectedItem > 0) {
                setSelectedItem((prev) => prev - 1);
              } else if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
                setSelectedItem((prev) => prev + 1);
              } else if (e.key === "Enter" && selectedItem >= 0) {
                window.open(searchData[selectedItem].url);
              }
        }else{
            setSelectedItem(-1)
        }
    }
  return (
    <>
    <div className="input-group border-0.5">
              <input
                type="text"
                className="form-control"
                placeholder="Search product & brand"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                autoComplete="off"
                onChange={handleChenge}
                value={search}
                onKeyDown={handlekeyDown}
              />
              
              <button
                className="btn btn-outline-secondary d-flex center"
                type="button"
                id="button-addon2"
              >
                 {search === "" ?  <MdSearch/> : <AiOutlineClose onClick={handleClose} />}
                <p>Search</p>
              </button>
            </div>
            <div className="search_result">
        {searchData.slice(0,10).map((data, index) => {
          return (
            
            <Link

              to={"/product"}
              key={index}
            //   target="_blank"
              className={
                selectedItem === index
                  ? "search_suggestion_line active"
                  : "search_suggestion_line"
              }
            >
              {data.brand}
            </Link>
          );
        })}
      </div>
            </>
  )
}

export default Search