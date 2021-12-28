import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, image, name, color, price, amount, company }) => {
  const { toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <ul className="mainproductdiv">
        <li>
          <div className="row">
            <img src={image} alt={name} className="small"></img>

            <div className="cartname">
              <h5>Qulaqciq</h5>
              <Link to={`/product/${name}`}>{name}</Link>
            </div>
            <div className="latestbtn">
              <AmountButtons
                amount={amount}
                increase={increase}
                decrease={decrease}
              />
              <div className="itemprice">{formatPrice(price * amount)}</div>
            </div>
          </div>
        </li>
      </ul>
     
    </Wrapper>
  );
};
const Wrapper = styled.article` 
    width: 90%;
    margin: auto;
    border: none;
    padding: 0px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    
    .row {
      width: 260px;
      margin: 0px;
      padding: 0px;
    }
  .small {
    width: 70px;
    height: 70px;
  }
  .cartname {   
    color: black;   
    font-weight: bold;
    font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 36px; 
    }

    a {
      color: black;
      font-weight: bolder;
font-size: 24px;
line-height: 36px; 
    }
    .cartname h5 {
      font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
    }
    .itemprice {   
      font-weight: bold; 
       } 
  .card {
       margin-top: 50px;   
       margin-left: 5px; 
       }  

  .block { 
    color: white; 
    }  
    
  .card {   
    border: 1px solid black;   
    padding: 20px; }
    } 
    
    .small {
      border-radius: var(--radius)
     margin-left: 2px;
      padding: 0px;
    }

    .latestbtn {
      width: 300px;
      justify-content: space-between;
      display: flex;
    } 

    .itemprice {
      font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: var(--main-color);
    }
hr {
  margin-top: 0px;
}
  @media (max-width: 776px) {
    padding: 0px;
    border: none;
    .row {
      width: 290px;
      margin: 0px;
      padding: 0px;
    }
    hr {
      width: 100%;
    }

    

    .latestbtn {
      width: auto;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
    } 
    .itemprice {
      font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 36px;
color: var(--main-color);
    }
    
    a {
      color: black;
      font-weight: bolder;
font-size: 14px;
line-height: 0px; 
    }
  }
    
    
    `;

export default CartItem;
