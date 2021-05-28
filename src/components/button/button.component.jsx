import React from 'react'
import './button.styles.scss'

const Button = ({ children }) => (
    <a href="/" className='button'>
        {children}
    </a>
)

export default Button