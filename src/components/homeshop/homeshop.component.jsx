import React from 'react'
import './homeshop.styles.scss'
import Card from '../card/card.component'
import Button from '../button/button.component'

const homeshopItems = [
    {
        id: 1,
        subCategory: 'Athletic',
        name: 'UMYOGO Running Tennis Shoes',
        imageUrl: 'https://m.media-amazon.com/images/I/81axS2m8f3L._AC_SY695._SX._UX._SY._UY_.jpg',
        price: 43.45
      },
      {
        id: 24,
        subCategory: 'Shirts',
        name: 'PJ PAUL JONES Striped Vintage Polo Shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71HcBQ81XYL._AC_UX679_.jpg',
        price: 89.50
      },
      {
        id: 61,
        subCategory: 'Wrist Watches',
        name: 'Eco-Drive Blue Angels World',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81NCuv0esNS._AC_UX679_.jpg',
        price: 235.99
      },
      {
        id: 77,
        subCategory: 'Sunglasses',
        name: 'ATTCL Retro Metal Frame Driving Polarized Sunglasses',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71mn3Iv6faL._AC_UX679_.jpg',
        price: 160.00
      },

]
const HomeShop = () => (
    <section className="homeshop">
        {/* <h2 className="heading-sub">favorites</h2> */}
        <div className="homeshop__container">
            {
                homeshopItems.map(item => {
                    return(
                        <Card 
                            key={item.id}
                            image={item.imageUrl}
                            category={item.subCategory}
                            name={item.name}
                            price={item.price}
                        />
                    )
                })
            }
        </div>
        <Button>discover all</Button>
    </section>
)

export default HomeShop