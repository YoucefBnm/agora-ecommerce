import React from 'react'
import Card from '../card/card.component'

const Collectionitem = ({ title, items }) => (
    <div className="collection">
        <h1 className="heading-sub">{title}</h1>
        <div className="collection__container">
            {
                items   
                    .map((item, index) => (
                        item.items.filter((item, index) => index < 4)
                        .map((item) => (
                            <Card 
                                key={item.id}
                                image={item.imageUrl}
                                category={item.subCategory}
                                price={item.price}
                            />
                        ))
                    ))
            }
        </div>
    </div>
)