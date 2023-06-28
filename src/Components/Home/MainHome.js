import React, { Component } from 'react'

import mainPic from '../../img/main/main__pic.png'
import MainInfo from './MainInfo'

export default class MainHome extends Component {
    render() {
        return (
            <section className='main__hero'>
                <div className='cont'>
                    <MainInfo />
                    <img src={mainPic} alt='Girl do fitness' className='main__pic' />
                </div>
            </section>
        )
    }
}
