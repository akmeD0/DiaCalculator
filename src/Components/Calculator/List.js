import React, { Component } from 'react'
import { BiMinusCircle } from "react-icons/bi";

export default class List extends Component {
    render() {
        if (this.props.itemList.length <= 0) {
            return (
                <p className='item__list--empty'>Хмм... Здається список порожній :(</p>
            )
        } else {
            return (
                <>
                    <div className='items__length'>
                            <h2>Продуктів у списку:</h2>
                            <span>{this.props.itemList.length}</span>
                        </div>
                    <div className='items'>
                        {this.props.itemList.map((el) => (
                            <div key={el.id} className='item'>
                                <img className='item__picture' src={`https://drive.google.com/uc?export=view&id=${el.picture}`} alt='product' />
                                <p className='item__name'>{el.name}</p>
                                <input id={el.id} className='item__input' type='number' placeholder='к-сть грам' />
                                <div className='item__btns'>
                                    <button onClick={() => {
                                        this.props.onSolve(el)
                                        document.getElementById(el.id).value = '';
                                    }} className='item__button solve'>Обчислити ХО</button>
                                    <button onClick={() => {
                                        this.props.onRemoveList(el)
                                    }} className='item__button minus'><BiMinusCircle className='minus' /> </button>
                                </div>
                                <div className='item__answer'>
                                    <p>Кількість ХО:</p>
                                    <span className='result'>{el.ans}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )
        }
    }
}
