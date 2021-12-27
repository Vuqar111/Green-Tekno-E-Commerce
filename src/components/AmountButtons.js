import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--black);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  height: 25px;
  width: 120px;

  h2 {
    margin-bottom: 0;
    font-size: 15px;
  }


  button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;

  }
  
  @media (max-width: 776px) {
    display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--black);
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  height: 25px;
  width: 60px;
  }


`

export default AmountButtons
