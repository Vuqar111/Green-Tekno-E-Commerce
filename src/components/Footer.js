import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="nav-header">
          <Link to="/">
            <h2 className="navtitle">
              Green<span>Tekno</span>
            </h2>
          </Link>
        </div>
        <div className="footerinfo">
          <div>
            Bizi İzləyin
            <ul className="icons">
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaFacebook />
              </li>
            </ul>
          </div>

          <div>
            Əlaqə
            <ul>
              <li>+994 55123 45 67</li>
              <li>info@gmail.com</li>
            </ul>
          </div>

          <div>
            Ünvan
            <ul>
              <li>Atatürk prospekti 58</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.footer`
  height: 12rem;
  display: flex;
  justify-content: center;
  background: var(--black);
  text-align: center;

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .navtitle {
    font-family: Poppins;
    font-style: normal;
    font-weight: bolder;
    font-size: 36px;
    line-height: 54px;
    color: #00a651;
  }

  .navtitle span {
    color: #0353a5;
  }
  .footer {
    display: flex;
    width: 78%;
    margin-top: 30px;
  }
  .footerinfo {
    width: 50%;
    display: flex;
    justify-content: space-around;
    margin-left: 40px;
    color: white;
  }
  .footerinfo div {
    text-align: left;
  }
  .footerinfo ul {
    margin-top: 10px;
  }
  .footerinfo .icons {
    display: flex;
    font-size: 1.5rem;
    padding: 10px;
    padding-top: 0px;
  }

  @media (max-width: 776px) {
    padding-left: 10px;
    flex-direction: column;
    height: auto;
    justify-content: left;
    background: var(--black);
    text-align: left;
    padding-bottom: 10px;
    .footer {
      flex-direction: column;
    }
    .footerinfo {
      width: 100%;
      flex-direction: column;
      margin-left: 0px;
      margin-top: 10px;
    }
    .footerinfo .icons {
    display: flex;
    font-size: 1.5rem;
    padding: 0px;
    padding-top: 0px;
  }
  .footerinfo div {
    margin-top: 15px;
  }
  }
`;

export default Footer;
