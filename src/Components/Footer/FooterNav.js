import React, { Component } from 'react'

export default class FooterNav extends Component {
    render() {
        return (
            <div className='footer__nav'>
                <p className='footer__nav--title'>Навігація</p>
                <div className='footer__links'>
                    {this.props.navigation.map((el) => (
                        <a href={el.link} key={el.id}>{el.text}</a>
                    ))}
                </div>
            </div>
        )
    }
}
