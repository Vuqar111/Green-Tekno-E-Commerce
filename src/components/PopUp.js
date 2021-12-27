import React from "react";
import { Card, CardGroup, ListGroup, Button } from "react-bootstrap";
import "../index.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Popup = (props) => {

    const selectedCircle = () => {};



  return (
    <Pop>
      <div className="productBody">
        <Card className="productPopUp">
          <Card.Title className="popupTitle">
            Hissə-hissə ödəniş{" "}
            <button
              style={{ borderRadius: "50%" }}
              onClick={props.handleClose}
              className="delete"
            >
              X
            </button>
            {props.content}
          </Card.Title>
          <Card.Body>
            <Card.Body className="popupInside">
              <img src="https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <Card.Text className="productName">
                <Card.Subtitle className="mb-2 text-muted">
                  Qulaqlıqlar
                </Card.Subtitle>
                <Card.Text>Apple Airpods Max</Card.Text>
              </Card.Text>
              <CardGroup className="cartcount">
                <button>-</button>
                <button>1</button>
                <button>+</button>
              </CardGroup>
              <Card.Text className="productPrice">$500.9</Card.Text>
            </Card.Body>
            <Card.Body className="monthCircle">
              <button className="gr" onClick={selectedCircle}>
                <a href="">6 ay</a>
              </button>
              <button onClick={selectedCircle}>
                <a href="">9 ay</a>
              </button>
              <button onClick={selectedCircle}>
                <a href="">12 ay</a>
              </button>
              <button onClick={selectedCircle}>
                <a href="">15 ay</a>
              </button>
              <button onClick={selectedCircle}>
                <a href="">18 ay</a>
              </button>
              <button onClick={selectedCircle}>
                <a href="">24 ay</a>
              </button>
            </Card.Body>
            <Card.Body className="selectedMonth">
              <ListGroup horizontal className="monthlist">
                <li>Müddət</li>
                <li>İlkin ödəniş</li>
                <li>Aylıq ödəniş</li>
              </ListGroup>
              <ListGroup horizontal className="monthlist monthDetail">
                <li>6 ay</li>
                <li>0 azn</li>
                <li>10 azn</li>
              </ListGroup>
            </Card.Body>
            <Card.Body className="productfoot">
              <Card.Text className="text">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  repellendus asperiores architecto placeat,
                </span>
              </Card.Text>
              <Link to="/credit">
                <button className="submitbtn" variant="success">
                  Sifarişi rəsmiləşdir
                </button>
              </Link>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    </Pop>
  );
};

const Pop = styled.div`

  .productBody {
    position: fixed;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 92vh;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .productPopUp {
    display: block;
    position: fixed;
    height: auto;
    padding: 15px;
    width: 100%;
    max-width: 900px;
    margin: 10px;
  }
  .productPopUp .popupInside {
    display: flex;
    align-items: center;
  }
  .productName,
  .cartcount,
  .productPrice,
  img {
    margin: 0 20px 0 20px;
  }
  .popupTitle {
    display: flex;
    justify-content: space-between;
    margin: 5px 0px 5px 50px;
    margin-left: 18px;
    font-size: 30px !important;
    font-weight: bolder;
  }

.delete {
    width: 40px;
    height: 40px;
    background: grey;
    outline: none;
    border: none;
    cursor: pointer;
}


  .productPopUp .popupInside .productPrice {
    color: green;
    font-weight: 700;
    font-weight: bolder;
  }
  .productPopUp img {
    width: 50px;
    height: 55px;
  }
  .cartcount {
    width: 110px;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
  }

  .cartcount button {
    outline: none;
    border: none;
    background: transparent;
    width: 35px;
    cursor: pointer;
  }

  .monthCircle {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
  .monthCircle button {
    border: none;
    width: 90px;
    height: 90px;
    margin: 0 15px 0 15px;
    border-radius: 50%;
    background: rgb(179, 178, 178);
  }

  .monthCircle button:nth-child(1) {
      height: 100px;
      width: 100px;
      background: var(--main-color);
      color: white;
  }
  .monthCircle button a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 20px;
  }

  .selectedMonth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .selectedMonth .monthlist {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 550px;
  }

  .selectedMonth .monthlist li {
    list-style: none;
    margin: 10px 50px 10px 50px;
  }
  .selectedMonth .monthDetail li {
    font-size: 24px;
    font-weight: 600;
  }
  .productfoot {
    display: flex;
    font-size: 10px;
    justify-content: space-around;
    align-items: center;
  }
  .productfoot .text {
    width: 100%;
    max-width: 500px;
  }
  .submitbtn {
      outline: none;
      border: none;
      background: var(--main-color);
      height: 30px;
      color: white;
      font-family: 'Poppins', sans-serif;
      border-radius: 5px;
      width: 200px;
  }

  @media (max-width: 576px) {



    .productBody {
    position: fixed;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 72vh;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .productPopUp {
    display: block;
    position: fixed;
    height: auto;
    padding: 15px;
    width: 100%;
    max-width: 900px;
    margin: 10px;
  }


  .popupTitle {
    display: flex;
    justify-content: space-between;
    margin: 5px 0px 5px 50px;
    margin-left: 0px;
    font-size: 15px !important;
    font-weight: bolder;
  }

.delete {
    width: 20px;
    height: 20px;
    background: grey;
    outline: none;
    border: none;
    cursor: pointer;
}


  .monthCircle button {
      border: none;
      width: 30px;
      height: 30px;
      margin: 5px;
      border-radius: 50%;
      background: rgb(179, 178, 178);
      font-size: 3px;
    }


    .monthCircle button:nth-child(1) {
      height: 35px;
      width: 35px;
      background: var(--main-color);
      color: white;
  }



  .monthCircle button a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 9px;
  }

  .selectedMonth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }




    .productPopUp {
      padding: 5px;
    }
    .productPopUp .popupInside {
      flex-direction: column;
      padding: 0px;
    }
    .productPopUp .popupInside * {
      text-align: center;
    }
    .productPopUp .popupInside .productName {
      margin: 10px;
      font-weight: 500;
    }
    .productPopUp .popupInside .productPrice {
      margin: 5px;
      font-weight: 500;
    }

    .productPopUp img {
      width: 50px;
      height: 50px;
      justify-content: center;
      text-align: center;
      margin: 10px;
    }

  

    .monthCircle {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      height: calc(5px * 2 + 5rem);
      align-content: center;
    }

 
    /* .monthCircle button {
      border: none;
      width: 75px;
      height: 75px;
      margin: 5px;
      border-radius: 50%;
      background: rgb(179, 178, 178);
    } */

    .selectedMonth .monthlist li {
      list-style: none;
      margin: 5px;
      font-size: 12px;
    }

    .selectedMonth .monthDetail li {
      font-size: 18px;
      font-weight: 600;
    }

    .productfoot {
      display: flex;
      font-size: 10px;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }
    .productfoot .text {
      width: 100%;
      max-width: 500px;
    }
  }
`;

export default Popup;
