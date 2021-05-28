import React from 'react'
import './intro.styles.scss'
import Button from '../button/button.component'
import ShopData from '../homeshop/shop.data'

const Intro = () => (
    <section className="intro">
        {/* <h2 className="heading-sub">featured categories</h2> */}
        <div className="intro__container">
            {
                ShopData.map((item,index) => {
                    return(
                        <div className={(index % 2) !== 0 ? 'intro__card intro__card--reverse' : 'intro__card'}>
                            <div className="intro__img" style={{ width: (index % 2) === 0 ? '40%' : '60%'}}>
                                <img src={item.bgImage} alt={item.title} />
                            </div>
                            <div className="intro__card-text" style={{ width: (index % 2) !== 0 ? '40%' : '60%'}}>
                                <h2 className='heading-sub'>{item.title}</h2>
                                <p className="text-lead">{item.description}</p>
                                <Button>shop now</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
)

export default Intro 