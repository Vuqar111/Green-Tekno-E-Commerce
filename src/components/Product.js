import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
      <Link to={`/products/${id}`} >
      <img src={image} alt={name} />       
        </Link>
        </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.article`
width: 265px;
height: 380px;
border-radius: var(--radius);
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  .container {
    width: 265px;
    position: relative;
    background: red;
    border-radius: var(--radius);
    padding: 0px;
  }
  img {
    width: 265px;
    height: 260px;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: var(--transition);
    margin: 0px;
    padding: 0px;
  }


  footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    
  }
  footer p {
    font-family: Poppins;
font-style: normal;
font-weight: bolder;
font-size: 17px;
line-height: 25px;
margin-top:16px;
color: var(--main-color);
  }


  footer h5 {
    font-size: 17px;
    font-weight: bolder;
    line-height: 25px;
    color: var(--black);
  }
`
export default Product
