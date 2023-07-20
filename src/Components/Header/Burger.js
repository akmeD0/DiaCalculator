import React from 'react'

export default function Burger() {

    return (
        <div id='burger' className='burger' onClick={() => {
            document.getElementById('burger').classList.toggle('active')
            document.querySelector('body').classList.toggle('lock');
            document.getElementById('aside').classList.toggle('active')
            let header = document.getElementById('header')
            if ( window.scrollY < 33) {
                header.classList.toggle('active');
            }
        }}>
            <span></span>
        </div>
    )
}