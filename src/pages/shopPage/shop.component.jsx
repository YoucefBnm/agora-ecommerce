import React from 'react'
import SHOP_DATA from '../../components/homeshop/shop.data'
import Card from '../../components/card/card.component'
import './shop.styles.scss'
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
            <div className="shoppage">
                {
                    collections.map(collection => (
                        <div className="shoppage__collection">
                            <h3>{collection.title}</h3>
                            <div className="shoppage__container">
                                {
                                    collection.items.map((item, {id}) => (
                                        <Card   
                                            key={id}
                                            image={item.imageUrl}
                                            category={item.subCategory}
                                            name={item.name}
                                            price={item.price}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage