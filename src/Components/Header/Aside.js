import React from 'react'
import Logo from '../Logo'
import logo from '../../img/header/logo.svg'

export default function Aside(props) {
    return (
        <aside className='aside' id='aside'>
            <div className='aside__cont'>
                <Logo logo={logo}/>
                <nav className='aside__nav'>
                    {props.nav.map((el) => (
                        <a href={el.link} key={el.id} onClick={() => {
                            document.getElementById('burger').classList.toggle('active')
                            document.querySelector('body').classList.toggle('lock');
                            document.getElementById('aside').classList.toggle('active')
                            let header = document.getElementById('header')
                            if (window.scrollY < 33) {
                                header.classList.toggle('active');
                            }
                            window.scrollTo(0, 0)
                        }}>{el.text}</a>
                    ))}
                </nav>
                <div className='aside__soc'>
                    <h2 className='aside__title'>Стежте за нами</h2>
                    <ul className='aside__list'>
                        {props.soc.map((el) => (
                            <a href={el.link} className='aside__soc--link' rel="noreferrer" target='_blank' key={el.id}>
                                {el.text}
                                <img src={el.img} alt='Social icon' className='aside__soc--img' />
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}
