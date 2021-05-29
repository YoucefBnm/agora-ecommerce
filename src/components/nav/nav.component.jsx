import React from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/shop-cart.svg'
import { ReactComponent as PersonIcon } from '../../assets/person.svg'
import Logo from '../../assets/calis-white.png'
import ShopData from '../homeshop/shop.data'
import { Link } from 'react-router-dom'

import './nav.styles.scss'

const Nav = () => (
    <nav className='nav'>
        <div className="nav__logo">
            <Link to="/">
                <img src={Logo} alt="logo"/>   
            </Link> 
        </div> 

        <ul className="nav__list">
            {
                ShopData.map(item => (
                    <li className="nav__item">
                        <a href={item.routeName} className="nav__link">{item.title}</a>
                    </li>
                ))
            }
        </ul>

        <div className="nav__cart">
            <ShoppingCart />
            <PersonIcon />
        </div>
    </nav>
)

export default Nav