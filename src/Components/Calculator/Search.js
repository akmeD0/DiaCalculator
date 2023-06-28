import React, { useState, useEffect, useCallback } from 'react'
import search from '../../img/calc/search.svg'
import { BsPlusCircle } from 'react-icons/bs'

export default function Search(props) {

    const [isEmpty, setIsEmpty] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    // GETTING INFO FROM DATABASE
    const [items, setItems] = useState([]);
    const getAllSeries = useCallback(() => {
        const SheetName = 'items';
        const SheetID = '1qLQZjvsYG4zdvirHuh4zc4iFesqsm6fArklpiUJ5BBM';
        const APIkey = 'AIzaSyAtoVCzk1pYTz-DevazJStzXNenio6eqrw';
        const APIlink = `https://sheets.googleapis.com/v4/spreadsheets/${SheetID}/values/${SheetName}?valueRenderOption=FORMATTED_VALUE&key=${APIkey}`
        
        fetch(APIlink).then(res => res.json()).then((result) => {
            formatResponse(result.values);
        }).catch((err) => {
            console.error(err);
        }).finally(() => {
            console.log('INFORMATION CONFIRMED')
        }, [])
    }, [])
    function formatResponse(result) {
        const keys = result[0];
        const data = result.slice(1);
        const obj = data.map(arr => Object.assign({}, ...keys.map((k, i) => ({ [k]: arr[i] }))));
        setItems(obj);
    }
    useEffect(() => {
        getAllSeries();
    }, [getAllSeries]);
    // --------------------------------

    return (
        <div className='search'>
            <label htmlFor="search"><img alt='search' src={search} /></label>
            <input id="search" type='search' className='calculator__search' onChange={() => {
                setSearchValue(document.getElementById('search').value)
                if (document.getElementById('search').value !== "") {
                    setIsEmpty(false)
                } else {
                    setIsEmpty(true)
                }
            }} placeholder='Знайти продукт...' />
            <div className={isEmpty ? 'search__list' : 'search__list show'}>
                {items.filter((el) => {
                    const name = (el.name).toLowerCase();
                    return name.includes(searchValue.toLowerCase());
                }).map((el) => (
                    <div className='search__list--item' key={el.id}>
                        <img src={`https://drive.google.com/uc?export=view&id=${el.picture}`} alt='product' />
                        <p>{el.name}</p>
                        <button onClick={() => {
                            props.onAddList(el)
                            setIsEmpty(true);
                            document.getElementById('search').value = '';
                        }}><BsPlusCircle className='plus' />Додати</button>
                    </div>
                ))}
            </div>
        </div>
    )
}