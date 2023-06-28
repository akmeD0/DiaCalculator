import React, { Component } from 'react'
import MainAdv from './MainAdv'
import MainTop from './MainTop'

export default class MainInfo extends Component {
    render() {
        return (
            <div className='main__info'>
                <MainTop />
                <MainAdv />
            </div>
        )
    }
}
