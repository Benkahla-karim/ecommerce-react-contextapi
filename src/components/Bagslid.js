import React, { useContext } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BagContext } from '../Context/bag-context'
const Bagslid = () => {
  const {BagItems,totalPrice} = useContext(BagContext)
  return (
    <div className='bag-slide'>
      <div className='line'></div>
      <div className='bag'>
        <h1>Bag</h1>
        <div className='items-bag'>
          {BagItems.map((item) => {
            return (
              <div className='item-image' key={item.id}>
                <img src={item.img} alt={item.title}/>
              </div>
            )
          })}
        </div>
        <Link to='/bag'>
        <button type='button' className='bag-btn'>
        <FaShoppingBag />
        <p>View Bag</p>
        </button>
        </Link>
        <h5>Total Price : {`$${+totalPrice.toFixed(2)}`}</h5>
      </div>
    </div>
  )
}

export default Bagslid