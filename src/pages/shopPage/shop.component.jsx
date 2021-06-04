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
        return (
            <section className="shoppage">
                {
                    this.state.collections.map((item, index) => (
                        <div key={index} className="shoppage__section">
                            <h2 className="heading-sub">{item.title}</h2>
                            <div className="shoppage__container">
                                {
                                    item.items.filter((item, index) => index < 4)
                                        .map(item => (
                                            <Card
                                                key={item.id}
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
            </section>
        )
    }
}
// this.state.collections.map(item => (
//     item.items.filter((itme, index) => index < 4)
//     .map(item => (
//         <div>{item.name}</div>
//     ))
// ))
export default ShopPage