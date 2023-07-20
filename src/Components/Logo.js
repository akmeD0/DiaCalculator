import React from 'react'


export default function Logo(props) {
    return (
        <a href='#/' className='header__logo' onClick={() => {
            window.scrollTo(0, 0)
            let aside = document.getElementById('aside')
            let header = document.getElementById('header')
            if (window.scrollY < 33) {
                header.classList.remove('active');
            }
            if (aside.classList.contains('active')) {
                aside.classList.remove('active')
                document.getElementById('burger').classList.toggle('active')
                document.querySelector('body').classList.toggle('lock');
            }
        }}>
            <img alt='Home Page' className='header__logo' src={props.logo} />
        </a>
    )
}
