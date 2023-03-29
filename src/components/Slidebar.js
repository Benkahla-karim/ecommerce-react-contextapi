import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {MdStore} from 'react-icons/md'
import {FaShoppingBag} from "react-icons/fa"
import { BagContext } from '../Context/bag-context'
import { useLocation } from 'react-router-dom'

const Slidebar = () => {
  
 const locationValid = useLocation()
 const {BagItems} =useContext(BagContext) 
 

  return (
    <section className='sidebar'>
      <Link to='/' >
        <div className='logo' >
          KR
        </div>
      </Link>
      <Link to='/'>
        <div className={`marcket ${locationValid.pathname === '/' ? 'active' : ''} `} >
          <MdStore size="24px"/>
          </div>
      </Link>
      <Link to='/bag'>
        <div className={`bag ${locationValid.pathname === '/bag' ? 'active' : ''}`}  >
          <FaShoppingBag size="22px"/>
          <div className='notification-bag'>{BagItems.length}</div>
        </div>
      </Link>
    </section>
  )
}

export default Slidebar