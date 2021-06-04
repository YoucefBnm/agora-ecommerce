import React from 'react'
import { ReactComponent as  ShopCart} from '../../assets/shop-cart.svg'

import './card.styles.scss'

const Card = ({ image, discount, category, name, price }) => (
    <div className='card'>
        <div className='card__header'>
            <img src={image} alt=''/>
            <span className="product-category">{category}</span>
        </div>
        <div className='card__body'>
            <h3 className="product-name">{name}</h3>
        </div>
        
        <div className="card__footer">
            <span className='product-price'>
                <span>${parseFloat(price).toFixed(2)}</span>
            </span>
            <ShopCart />
        </div>
    </div>
)

export default Card 