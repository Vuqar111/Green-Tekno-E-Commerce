import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";
const SecondNavbar = () => {
  return (
    <Wrapper>
      <div className="containermain">
        <div className="category">
          <GiHamburgerMenu />
          <h5>Kateqoriyaları göstər</h5>
        </div>

        <div className="search">
          <input type="text" placeholder="Məhsul axtar" className="secinput" />

          <button>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background: var(--main-color);
  .containermain {
    width: 55%;
    height: 100%;
    margin-left: 11%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .secinput {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border: none;
    outline: none;
    border-radius: 25px;
  }

  .category {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 220px;
    background: white;
    color: var(--main-color);
    text-align: center;
    border-radius: 25px;
    height: 40px;
    cursor: pointer;
  }
  .category i {
    font-size: 20px;
  }

  .search {
    width: 510px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 25px;
    background: white;
  }
  .search button {
    border: none;
    outline: none;
    background: none;
    font-size: 24px;
    color: var(--main-color);
    padding: 10px;
  }

  @media (max-width: 776px) {
    width: 100%;
    justify-contet: space-between;
    .containermain {
      width: 100%;
      height: 100%;
      margin-left: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .category h5 {
      display: none;
    }

    .category {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50px;
      background: white;
      color: var(--main-color);
      text-align: center;
      border-radius: 25px;
      height: 40px;
      cursor: pointer;
    }
    .category i {
      font-size: 20px;
    }

    .secinput {
      width: 100%;
      height: 100%;
      padding-left: 10px;
      border: none;
      outline: none;
      border-radius: 25px;
    }

    .search {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      border-radius: 25px;
      background: white;
    }
    .search button {
      border: none;
      outline: none;
      background: none;
      font-size: 24px;
      color: var(--main-color);
      padding: 10px;
    }
  }
`;
export default SecondNavbar;
