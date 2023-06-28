import React, { useState } from 'react'

export default function Burger() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={isOpen ? 'burger active' : 'burger'} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
        </div>
    )
}
