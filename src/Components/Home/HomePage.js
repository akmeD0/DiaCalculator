import React, { Component } from 'react'
import MainHome from './MainHome'


export default class HomePage extends Component {
    componentDidMount() {
        document.title = this.props.title
    }
    render() {
        return (
            <main className='main'>
                <MainHome />
            </main>
        )
    }
}
