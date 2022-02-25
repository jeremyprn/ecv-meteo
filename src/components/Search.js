import '../assets/css/search.css'
import React, { useEffect, useState } from 'react';
import cities from '../assets/data/cities';
import { BsSearch } from "react-icons/bs";

export default function Search ({setCitySearch}){

    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        dynamicSearch();
    }, [searchTerm]);

    const editSearchTerm = (e) => {
        // console.log(e.target.value);
        setSearchTerm(e.target.value)
    }

    const dynamicSearch = () => {
        if(searchTerm.split('').length > 2)
        setResult(cities.filter(city => city.toLowerCase().includes(searchTerm.toLocaleLowerCase())));
    }

    return (
        <div className="search-container">
            <div className='search-input'>
                <input type="text" onKeyUp={(e) => {
                    if(e.key === 'Enter'){
                        setCitySearch(searchTerm);
                    }
                }} value={searchTerm} onChange={editSearchTerm} placeholder={"Search ..."}/>
                <BsSearch className='search-icon'/>
            </div>
            <div className='search-result'>
                {searchTerm ? result.map((city, index) => {
                    return (
                        <div key={index} onClick={() => {
                            setCitySearch(city);
                            setSearchTerm('');
                        }} className='search-city'>{city}</div>
                    );
                }): <></>}
            </div>
        </div>
    )
    
}