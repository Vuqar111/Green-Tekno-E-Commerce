import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import Samples from "./Samples";
import { Loading, Error, ProductImages, AddToCart } from "../components";
import styled from "styled-components";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log(history);
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 5000);
    }
    // eslint-disable-next-line
  }, [error]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const { name, price, stock, id: sku, company, images } = product;
  return (
    <Wrapper>
      <div className="section section-center page">
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>

            <p className="info b">
              <span>Brand :</span>
              {company}
            </p>

            <h6 className="price">{formatPrice(price)}</h6>

            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>

      <div className="productdetails">
        <div className="topinfo">
          <h3 className="title">Məhsul Detalları</h3>

          <hr />

          <div className="topinformation">
            <div className="left">
              <h2>Səs Texnologiyası:</h2>
              <div>
                <h5>LTE </h5>
                <h5>Var</h5>
              </div>
              <div>
                <h5>4G</h5>
                <h5>Var</h5>
              </div>
              <div>
                <h5>SİM-kart növü</h5>
                <h5>Dual SIM (Nano-SIM dual stand-by)</h5>
              </div>
              <div>
                <h5>SIM-kart sayı</h5>
                <h5>2</h5>
              </div>
            </div>

            <div className="left">
              <h2>Akkumulyator</h2>
              <div>
                <h5>Əməliyyat sistemi</h5>
                <h5>Android 11 One UI 31</h5>
              </div>
              <div>
                <h5>Prosessor tipi(Chipset)</h5>
                <h5>Qualcomm SM7125</h5>
              </div>
              <div>
                <h5>Qrafik Prosesor(GPU)</h5>
                <h5>Adreno 618</h5>
              </div>
              <div>
                <h5>Nüvə sayı</h5>
                <h5>8</h5>
              </div>
            </div>
          </div>

          <div className="topinformation">
            <div className="left">
              <h2>Səs Texnologiyası:</h2>
              <div>
                <h5>LTE </h5>
                <h5>Var</h5>
              </div>
              <div>
                <h5>4G</h5>
                <h5>Var</h5>
              </div>
              <div>
                <h5>SİM-kart növü</h5>
                <h5>Dual SIM (Nano-SIM dual stand-by)</h5>
              </div>
              <div>
                <h5>SIM-kart sayı</h5>
                <h5>2</h5>
              </div>
            </div>

            <div className="left">
              <h2>Akkumulyator</h2>
              <div>
                <h5>Əməliyyat sistemi</h5>
                <h5>Android 11 One UI 31</h5>
              </div>
              <div>
                <h5>Prosessor tipi(Chipset)</h5>
                <h5>Qualcomm SM7125</h5>
              </div>
              <div>
                <h5>Qrafik Prosesor(GPU)</h5>
                <h5>Adreno 618</h5>
              </div>
              <div>
                <h5>Nüvə sayı</h5>
                <h5>8</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="simp">Oxşar Məhsullar</h2>

      <Samples />
    </Wrapper>
  );
};

const Wrapper = styled.main`
hr {
  margin-top: 10px;
}
.section {
  margin-top: 0px;
}
  .product-center {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .price {
    font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 54px;
    color: var(--main-color);
  }

  .b {
      margin-top: 10px;
    }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 100px;
    display: grid;
    grid-template-columns: 85px 1fr;
    span {
      font-weight: 700;
    }
  }

  /* hr {
    margin-top: 10px;
  } */
  .info2 {
    text-transform: capitalize;
    width: 100px;
    display: grid;
    grid-template-columns: 85px 1fr;
    span {
      font-weight: 700;
    }
  }


.simp {
  text-align: center;
}
  .productdetails {

    width: 80%;
    margin: auto;
    padding: 30px;
  }

  .topinfo {
    margin-top: 20px;
    width: 90%;
    margin: auto;
  }
  .topinfo .title {
    text-align: left;
    font-weight: bolder;
    color: var(--main-color);
    width: 90%;
    margin: auto;
  }

  .topinformation {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .topinformation .left div {
    display: flex;
    padding-top: 6px;
  }

  .left h2 {
    font-style: normal;
    font-weight: bolder;
    font-size: 25px;
    line-height: 37px;
  }

  .left h5 {
    font-size: 17px;
    font-weight: normal;
    line-height: 25px;
    color: var(--black);
  }



 

   
    .sampleimg {
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

    
  }

    @media (max-width: 776px) {
   
      .section {
        margin-top: 0px;
        width: 100%;
}


.content{
  width: 100%;
  
}
.product-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    margin-top: 0rem;
    padding: 0px;
  }

   .price {
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 10px;
  }


.simp {
  text-align: center;
}
  .productdetails {
    width: 100%;
    margin: auto;
    padding: 30px;
  }
  .b {
      margin-top: 0px;
    }
  .topinfo {
    margin-top: 20px;
    width: 100%;
    margin: auto;
  }
  .topinfo .title {
    text-align: left;
    font-weight: bolder;
    color: var(--main-color);
    width: 100%;
    margin: auto;
  }

  .topinformation {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;

  }

  .topinformation .left div {
    display: flex;
    
    padding-top: 6px;
  }

  .left h2 {
    font-style: normal;
    font-weight: bolder;
    font-size: 20px;
    line-height: 37px;
  }



    }
  
`;

export default SingleProductPage;
