import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { samples } from "../utils/constants";
const Samples = () => {
  return (
    <Wrapper>
      <div className="products-container">
        {samples.map((pr) => {
          return (
            <div className="cont">
              <div className="container">
                <Link to="">
                  <img src={pr.img} alt={pr.title} className="sampleimg" />
                </Link>
              </div>
              <footer>
                <h5>{pr.title}</h5>
                <p>{pr.price}</p>
              </footer>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* * {
    border: 1px solid white;
} */

  width: 90%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;

  .products-container {
    width: 85%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
  }

  .container {
    width: 256px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .sampletitle {
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 53px;
    color: var(--black);
    text-align: center;
    margin-top: 15px;
  }
  h5 {
    margin-top: 3px;
  }

  .cont {
    border: 1px solid grey;
    padding: 0px;
    border-radius: var(--radius);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .sampleimg {
    max-width: 256px;
    width: 100%;
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
    margin-top: 16px;
    color: var(--main-color);
  }

  footer h5 {
    font-size: 17px;
    font-weight: bolder;
    line-height: 25px;
    color: var(--black);
  }

  @media (max-width: 768px) {
    .products-container {
      justify-content: center;
      padding-top: 10px;
    }

    .cont {
      margin-top: 15px;
    }

    .sampleimg {
      width: 100%;
    }
  }
`;

export default Samples;
