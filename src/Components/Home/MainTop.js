import React, { Component } from 'react'

export default class MainTop extends Component {
    render() {
        return (
            <div className='main__top'>
                <div className='main__title'>
                    <h1 className='main__title'>Діабетичний калькулятор</h1>
                    <p className='main__title--sub'>Контролюй своє здоров’я легко!</p>
                </div>
                <a href='/calculator' className='main__btn'>Розпочати роботу!</a>
            </div>
        )
    }
}
