import React from 'react'

import circle from '../img/calc/circle bg.svg'

export default function Circle() {
    return (
        <div className='calculator__circle--cont'>
            <img src={circle} alt='circle' className='circle' />
        </div>
    )
}
