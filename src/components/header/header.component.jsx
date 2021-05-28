import React from 'react'
import './header.styles.scss'
import Button from '../button/button.component'
import HeaderVideo from '../../assets/header-video.mp4'

const Header = () => (
    <header className='header'>
        <div className="header__text">
            <h1 className='heading-main'>different is what makes the difference</h1>
            <p className='text-lead'><span>CALIS</span> is a modern marketplace that filters all products to find quality products with the lowest price.</p>
            <Button>discover collection <span>&rarr;</span></Button>
        </div>
        <div className="header__bg">
            <video src={HeaderVideo} className="header__video" playsInline autoPlay muted loop></video>
        </div>
    </header>
)

export default Header