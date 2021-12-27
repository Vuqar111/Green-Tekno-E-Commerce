import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
const CartItems = () => {
  const { cart } = useCartContext();

  return (
    <Wrapper className="section section-center">
        <div className="products">
        {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
          <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 776px) {
    flex-direction: column;
    hr {
      width: 100%;
    }
  }
`;
export default CartItems;
