import React, { Component } from 'react'

export default class FooterSoc extends Component {
    render() {
        return (
            <div className='footer__soc'>
                <p className='footer__soc--title'>Стежте за нами</p>
                <div className='footer__list'>
                    {this.props.soc.map((el) => (
                        <a href={el.link} rel="noreferrer" target='_blank' key={el.id}>
                            <img src={el.img} alt='Social icon' className='footer__soc--img'/>
                            {el.text}
                        </a>
                    ))}
                </div>
            </div>
        )
    }
}
