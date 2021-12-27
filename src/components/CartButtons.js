import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'

const CartButton = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items} = useCartContext()
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      <Link to='/heart' className='cart-btn' onClick={closeSidebar}>
        <span className='cart-container'>
          <AiOutlineHeart />
        </span>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100px;


  .cart-btn {
    color: var(--main-color);
    font-size: 1.5rem;
    color: var(--clr-grey-1);
    display: flex;
   
  }
  .cart-container {
    display: flex;
   
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -12px;
    right: -18px;
    background: var(--main-color);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  }
`
export default CartButton
