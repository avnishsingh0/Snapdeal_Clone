import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const SearchItems=() => {
    const [items,setItems]=useState([])
    const [q, setQ] = useState("");
//     set search parameters
      //     we only what to search products by rating
      //     this list can be longer if you want
      //     you can search countries even by their population
      // just add it to this array
      
      const [searchParam] = useState(["rating"]);

      useEffect(()=>{
        axios.get("https://snapdeal.onrender.com/products").then(res => {setItems(res.data)}).catch(err=>console.log(err));
      },[])


      return (
        items.filter((item) => {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
            );
        });
    }))
}


  