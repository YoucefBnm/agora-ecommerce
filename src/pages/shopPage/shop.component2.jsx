import React from 'react'
import SHOP_DATA from '../../components/homeshop/shop.data'
import Card from '../../components/card/card.component'
import './shop.styles.scss'
class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA,
            allItems: [],
            splitedArray: [],
            chunkLength: 8
        }
    }

    getAllItems = (array) => {
        array.map(collection => {
            collection.items.map(item => {
                this.state.allItems.push(item)
            })
        })
        console.log(this.state.allItems)
    }
    splitItems = () => {
        let count,
            arrayElement
        while(this.state.length > 0) {
            if(count < 2) {
                arrayElement = this.state.allItems.splice(0,count)
                this.setState({ splitedArray: this.state.splitedArray.push(arrayElement)})
            } else {
                arrayElement = this.state.allItems.splice(0,this.state.chunkLength)
                this.setState({ splitedArray: this.state.splitedArray.push(arrayElement)})

            }
        }
        console.log(this.state.splitedArray, 'splited array')
    }
    render() {
        const { collections } = this.state 
        return(
            <div className="shoppage">
                <button onClick={() => this.splitItems}>test</button>
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

// const testt = array => {
//     let count,
//         arrayEl
//     while(array.length > 0)
//         if(count < 2) {
//             arrayEl = array.splice(0, count)
// nums.push(arrayEl)
//         }else {
//             arrayEl= array.splice(0, 2)
//             nums.push(arrayEl)
//         }
// }