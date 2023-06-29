import React from 'react'


export default function Logo(props) {
    return (
        <a href='/' className='header__logo'>
            <img alt='Home Page' className='header__logo' src={props.logo} />
        </a>
    )
}
