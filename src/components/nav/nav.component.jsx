import React from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/shop-cart.svg'
import Logo from '../../assets/calis-white.png'
import ShopData from '../homeshop/shop.data'
import './nav.styles.scss'

const Nav = () => (
    <nav className='nav'>
        <div className="nav__logo">
            <img src={Logo} alt="logo"/>    
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
        </div>
    </nav>
)

export default Nav