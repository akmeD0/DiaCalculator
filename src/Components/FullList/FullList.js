import React, { useState, useEffect, useCallback } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import Circle from '../Circle';

export default function FullList() {

    const [value, setValue] = useState('');

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

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <main className='fulist'>
            <div className='fulist__cont cont'>
                <div className='fulist__box'>
                    <input
                        className='fulist__search'
                        id='fulistsearch'
                        type='search'
                        placeholder='Знайти продукт...'
                        value={value}
                        onChange={handleInputChange}
                    />
                    <button className='fulist__btn'><BsPlusCircle />Додати</button>
                </div>
                <div className='fulist__list'>
                    <div className='items__length'>
                        <h2>Продуктів у списку:</h2>
                        <span>{items.length}</span>
                    </div>
                    {items.filter((el) => {
                        const name = (el.name).toLowerCase();
                        return name.includes(value.toLowerCase())
                    }).map((el) => (
                        <div className='fulist__element' key={el.id}>
                            <div className='fulist__left'>
                                <img src={`https://drive.google.com/uc?export=view&id=${el.picture}`} className='fulist__picture' alt='Product' />
                                <p>{el.name}</p>
                            </div>
                            <div className='fulist__right'>
                                <p>Вуглеводів (на 100г):</p>
                                <span>{el.carb} г</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Circle />
        </main>
    )
}
