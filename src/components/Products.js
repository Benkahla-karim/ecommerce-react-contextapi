import React, { useContext } from 'react'
import Searchbar from './Searchbar'
import products from '../data'
import {BsFillBagPlusFill, BsInfoLg} from 'react-icons/bs'
import { useState } from 'react'
import { BagContext } from '../Context/bag-context'
const Products = () => {
const {setBagItems,setTotalPrice,BagItems} = useContext(BagContext)


const addToBag =(item) => {
  if (BagItems.find((ele) => ele.id === item.id)) {
    ++item.amount
  
    setTotalPrice((prevTotalPrice) => prevTotalPrice +  item.price )
    return
  }
  setBagItems((prevBagItmes) => [...prevBagItmes,item])
  setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price )
  item.amount = 1

}

  

  return (
    <div className='products'>
      <Searchbar/>
      <div className='row'>
        {products.map((product) => {
            return (
              <div key={product.id} className="items-card" >
                <div className='itmes-img'>
                  <img src={product.img} alt={product.title} />
                </div>
                <div className='item-info'>
                  <h4>{product.title}</h4>
                  <p>{product.model}</p>
                  <div className='item-price'>
                    <span>{`$${product.price}`}</span>
                    <button className='add-to-cart'  onClick={() => addToBag(product)}  >
                    <BsFillBagPlusFill/>
                    </button>
                  </div>
                </div>
              </div>
            )
        })}

      </div>
    </div>
  )
}

export default Products