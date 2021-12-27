import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom';
import {AiOutlineRight} from 'react-icons/ai';
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()

  return (
    <Wrapper>
          <div class="promokodBox">
        <div class="promoBox1">
            <input class="inputPromo" placeholder="Promokod" type="text" /><button className="promoInputBtn" type="button" ><AiOutlineRight /></button>
        </div>
        <table class="promoBox2">
            <tr className="promoDetBox">
                <td className="promoDetail">Endirim</td>
                <td className="promoPrice">{formatPrice(total_amount + shipping_fee)}</td>
            </tr>
            <tr className="promoDetBox">
                <td className="promoDetail">Çatdırılma</td>
                <td className="promoPrice">{formatPrice(total_amount + shipping_fee)}</td>
            </tr>
            <tr className="promoDetBox">
                <td className="promoDetail bigF">Toplam</td>
                <td className="promoPrice bigF">{formatPrice(total_amount + shipping_fee)}</td>
            </tr>
        </table>
        <Link to="/cash">
        <button className="promoSubmit" type="button" >Sifarişi Rəsmiləşdir</button>
        </Link>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
  .promokodBox {
            border: 1px solid grey;
            border-radius: 10px;
            width: 100%;
            max-width: 400px;
            height: 100%;
            max-height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 15px;
        }
        .promoBox1 {
            width: 100%;
            display: flex;
            padding: 10px;
            justify-content: space-between;
        }
        .promoBox1 .inputPromo {
            border-radius: 5px;
            border: 1px solid grey;
            padding: 10px;
            width: 320px;
        }
        .promoInputBtn {
            background: #ffff;
            border: 1px solid grey;
            width: 40px;
            height: 40px;
            border-radius: 5px;
        }
        .promoBox2, tbody{
            width: 100%;
            padding: 10px 0 10px 0;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        .promoBox2 .promoDetBox {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }
        .promoBox2 .promoDetBox {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }
        .promoBox2 .promoDetBox .promoPrice{
            color: #00A651;
            font-weight: 500;
        }
        .promoBox2 .promoDetBox .bigF {
            font-size: 24px;
        }
        .promoSubmit {
            width: 360px;
            height: 40px;
            background: #00A651;
            color: white;
            border: 1px solid #00A651;
            padding: 5px;
            margin: auto;
            margin-left: 0px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
 
        @media (max-width: 776px) {
          padding: 20px;
          .promoSubmit {
           height: 30px;
           width: 200px;
          }
        }
`

export default CartTotals
