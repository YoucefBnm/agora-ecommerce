import React from 'react'
import SHOP_DATA from '../../components/homeshop/shop.data'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state 
        return(
            <div className="shopPage">
                shop page
            </div>
        )
    }
}

export default ShopPage