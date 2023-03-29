import React, { useContext } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { BagContext } from '../Context/bag-context'

const Bagitems = () => {

  const {BagItems,setBagItems,setTotalPrice} = useContext(BagContext)
  
  const removeFrombagHandler =(item) => {

    setBagItems((prevBagItems) => prevBagItems.filter(ele => ele !== item))
    setTotalPrice((prevTotalPrice) => prevTotalPrice - (item.price * item.amount))
  }

  return (
    <div className='Bag-section'>
      <h1>Check your Bag Items</h1>
      <div className='Bag-products'>
        {BagItems.map((product) => {
          return (
            <div key={product.id} className='Bag-product'>
               <div className='Bag-img'>
                   <img src={product.img} alt={product.title} />
               </div>
               <div className='Bag-product-info'>
                    <h3>{product.title}</h3>
                    <span className='product-model'>{product.model}</span>
                    <p>{product.description}</p>
                   <div >
                          <span className='price'>{`$${product.price} x ${product.amount}`}</span>
                   </div>
               </div>
               <button className='delet-btn' onClick={() => removeFrombagHandler(product)}><MdDeleteForever></MdDeleteForever></button>
               
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Bagitems