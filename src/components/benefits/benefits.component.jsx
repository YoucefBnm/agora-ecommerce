import React from 'react'
import { ReactComponent as ShippingIcon } from '../../assets/ship-icon.svg'
import { ReactComponent as SupportIcon } from '../../assets/support-icon.svg'
import { ReactComponent as DollaIcon } from '../../assets/dolla-icon.svg'
import './benefits.styles.scss'

const Benefits = () => (
    <section className="benefits">
        <div className="benefits__card">
            <ShippingIcon />
            <div className="benefits__card-text">
                <h3>free shipping and return</h3>
                <p>Free Shipping over $300</p>
            </div>
        </div>
        <div className="benefits__card">
            <DollaIcon /> 
            <div className="benefits__card-text">
                <h3>money back guarantee</h3>
                <p>30 Days Money Back Guarantee</p>
            </div>
        </div>
        <div className="benefits__card">
            <SupportIcon />
            <div className="benefits__card-text">
                <h3>77-91-57-47</h3>
                <p>24/7 available support</p>
            </div>
        </div>
    </section>
)

export default Benefits
