import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { AiOutlineHeart } from "react-icons/ai";
import Popup from './PopUp';
import AmountButtons from "./AmountButtons";


const AddToCart = ({ product }) => {


  const [isOpen, setIsOpen] = useState(false)
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }



  // add to cart
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="categorysection">
        <div className="colors">
          <span>Rənglər:</span>
          <div className="colorbtn">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  style={{ background: color }}
                  className={`${
                    mainColor === color ? "color-btn active" : "color-btn"
                  }`}
                  onClick={() => setMainColor(color)}
                >
                  {mainColor === color ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className="colors">
          <span>Yaddaş</span>
          <div className="colorbtn">
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    mainColor === color ? "size-btn active" : "size-btn"
                  }`}
                >
                  32 GB
                </button>
              );
            })}
          </div>
        </div>


      </div>

      <hr />



      <div className="infodetail">
          <div className="info">
            <span>Ekran ölçüsü:</span>
            6.5
          </div>
          <div className="info">
            <span>Əməliyyat sistemi :</span>
            IOS 3
          </div>
          <div className="info">
            <span>Operativ Yaddaş(Ram) :</span>
            8 GB
          </div>
          <div className="info">
            <span>Əsas Kamera (MP) :</span>
            64 + 12 + 12 + 5
          </div>
        </div>


        <hr/>
      <div className="btn-container">
        {/* <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        /> */}

        <Link
          to="/cart"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
         <button className="btn cash">Səbətə əlavə et</button>
        </Link>

        <button onClick={togglePopup}  className="btn credit">Hissə hissə ödəniş</button>
        {isOpen && <Popup handleClose={togglePopup}/>}

        <button className="like">
          <AiOutlineHeart />
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  hr {
    margin-top: 10px;
  }
  margin-top: 2rem;
  .colors {
    display: flex;
    flex-direction: column;
    span {
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .categorysection {
    display: flex;
    justify-content: space-between;
    margin-right: 25%;
  }

  .colorbtn {
    margin-top: 10px;
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    padding: 3px;
    border: 2px solid white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      display: none;
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }


  .infodeatail {
margin-top: 10px;
background: red;
width: 100%;
height: auto;
  }




  .info {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    display: flex;
    justify-content: space-between;
    width: 80%;
    background: transparent;
    font-weight: bolder;
  
     
    span {
      color: grey;
      font-weight: 700;
    }
  }
  .size-btn {
    display: inline-block;
    width: 50px;
    height: 1.5rem;
    border: 3px solid var(--main-color);
    border-radius: 5px;
    background: none;
    margin-right: 0.5rem;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }

  .active {
    border: 2px solid black;
  }

  .activesize {
    border: 1.5px solid var(--main-color);
  }
  .btn-container {
    width: 500px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    text-align: center;
    font-size: 18px;
  }

  .btn {
    background: var(--main-color);
    width: 210px;
    height: 40px;

  }
  .cash{
    pading-top: 17px;
  }
  .credit {
    background: white;
    color: var(--main-color);
    width: 210px;
    border: 1px solid var(--main-color);
  }

  .like {
    outline: none;
    border: none;
    font-size: 30px;
    background: transparent;
  }




  @media (max-width: 768px) {

   
    .categorysection {
      display: flex;
      justify-content: space-between;
      margin-right: 0%;
    }


    .infodeatail {
margin-top: 10px;
  }



  .info {
    margin-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    color: var(--black);
    justify-content: space-between;
    width: auto;
    span {
      color: grey;
      font-weight: 700;
    }
  }


  .btn-container {
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    text-align: center;
    font-size: 7px;
  }

  .btn {
    background: var(--main-color);
    width: 140px;
    height: 30px;
    font-size: 8px;
    font-weight: bold;
  }

  .cash {
    padding-top: 5px;
  }

  .credit {
    background: white;
    color: var(--main-color);
    width: 140px;
    height: 30px;
    border: 1px solid var(--main-color);
  }

  .like {
    outline: none;
    border: none;
    font-size: 25px;
    background: transparent;
  }



  }
`;
export default AddToCart;
