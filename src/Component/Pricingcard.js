import React from 'react'
import './Cardstyle.css'
import { Link } from 'react-router-dom'

export const Pricingcard = () => {
  return (
    <div className='pricing'>
        
        <div className='cardcontainer'>
            <div className='card'>
                <h3>-BASIC-</h3>
                <span className='Bar'></span>
                <p className='btn'> 1 BTC </p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p>Private Quartes</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>-SUITS-</h3>
                <span className='Bar'></span>
                <p className='btn'> 2 BTC </p>
                <p>6 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p>Private Quartes</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>-VIP-</h3>
                <span className='Bar'></span>
                <p className='btn'> 3 BTC </p>
                <p>12 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p>Private Quartes</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>

        </div>



    </div>
  )
}
