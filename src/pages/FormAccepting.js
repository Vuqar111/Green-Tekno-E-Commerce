import React from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FormAccepting = () => {
  return (
    <Order>
      <div className="ordersection">
        <div className="form">
          <div className="options">
            <div className="cash option">
              <h3>Nağd</h3>
              <h5>Qapıda nağd ödəniş</h5>
            </div>
            <Link to="/credit">
              <div className="cartop option">
                <h3>Kreditlə Ödəniş</h3>
                <h5>Kredit kartı ilə ödə</h5>
              </div>
            </Link>
          </div>

          <form>
            <div className="form-group">
              <div>
                <label for="name">Ad</label>
                <input type="text" className="form-control" id="name" />
              </div>

              <div>
                <label for="surname">Soyad</label>
                <input type="text" className="form-control" id="surname" />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label for="name">Ata adı</label>
                <input type="text" className="form-control" id="name" />
              </div>

              <div>
                <label for="surname">Telefon nömrəsi</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  placeholder="+994"
                />
              </div>
            </div>

            <div className="latest">
              <label for="surname">Əlavə Qeydlər</label>
              <input type="text" className="form-control" id="surname" />
            </div>

            <h5>Çatdırılma Ünvanı</h5>
            <div className="form-group">
              <div>
                <label for="name">Şəhər</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Ad"
                />
              </div>

              <div>
                <label for="surname">Rayon</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  placeholder="Soyad"
                />
              </div>
            </div>
            <div className="latest">
              <label for="surname">Ünvan</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                placeholder="Soyad"
              />
            </div>

            <div className="submit">
              <button type="button">Sifarişi Təsdiqlə</button>
            </div>
          </form>
        </div>

        <div className="rightform">
          <h4>
            Cəmi <span>60 $</span>
          </h4>
          <h4>
            Çatdırılma <span>60 $</span>
          </h4>
          <h3>
            Yekun <span>600 $</span>
          </h3>
        </div>

        {/* <div className="checkoutform">
        <p>Cemi: 60</p>
        <p>Catdirilma: 30</p>
        <h3>Yekun: 600 $</h3>
      </div> */}
      </div>
    </Order>
  );
};

const Order = styled.div`
  .ordersection {
    width: 80%;
    margin: auto;
    border: none;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
  }

  .options {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .option {
    width: 300px;
    height: 130px;
    border: 1px solid #a3a3a3;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 8px;
    padding-top: 8px;
  }

  .cash {
    border: 3px solid var(--main-color);
  }

  .checkoutform {
    border: 1px solid black;
  }
a {
  color: black;
}
  .form {
    width: 50%;
  }

  .form-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .form-group label {
    font-weight: bolder;
  }
  .form-group input {
    width: 300px;
    height: 40px;
    outline: none;
    padding-left: 10px;

    background: #ffffff;
    border: 1px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 5px;
  }

  form h5 {
    margin-top: 40px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
  .form-group div:nth-child(2) {
    margin-left: 10px;
  }

  .latest {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .latest label {
    font-weight: bolder;
  }
  .latest input {
    height: 40px;
    outline: none;
    padding-left: 10px;
    background: #ffffff;
    border: 1px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 5px;
  }


  .submit {
      display: flex;
      align-items: center;
      justify-content: right;
      margin-top: 20px;
      padding-bottom: 20px;
  }
  .submit button {
    width: 248px;
height: 40px;
background: var(--main-color);
border: none;
outline: none;
border-radius: 8px;
color: #ffffff; 
font-size: 18px;

  }


.rightform {
  border: 1px solid black;
  width: auto;
  height: 100%;
  padding: 25px;
  border-radius: 10px;
  padding-left: 50px;
  text-align: left;
}

  @media (max-width: 768px) {
    .ordersection {
    width: 80%;
    margin: auto;
    border: none;
    margin-top: 70px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .submit {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      padding-bottom: 20px;
  }
  .submit button {
    width: 90%;
height: 40px;
background: var(--main-color);
border: none;
outline: none;
border-radius: 8px;
color: #ffffff; 
font-size: 18px;

  }
    .form {
    width: 100%;
  }
    .ordersection {
    width: 100%;
    margin: auto;
    border: none;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;

  }


  .options {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .option {
    width: 140px;
    height: 60px;
    border: 1px solid #a3a3a3;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 8px;
    padding-top: 8px;
    cursor: pointer;

  }

  .cash {
    border: 3px solid var(--main-color);
  }

  .option h3, h5{
    font-size: 10px;
  }
  

  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5px;
    padding: 10px;
  }

  .form-group label {
    font-weight: bolder;
  }
  .form-group input {
    width: 100%;
    height: 35px;
    outline: none;
    padding-left: 10px;
    margin-top: 5px;
    background: #ffffff;
    border: 1px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .form-group div:nth-child(2) {
    margin-left: 0px;
  }

  .latest {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-auto;
    padding: 10px;

  }


  form h5 {
    margin-top: 40px;
    padding: 10px;
  }

  .latest label {
    float: left;
    text-align: left;
    font-weight: bolder;
  }
  .latest input {
    width: 100%;
    height: 35px;
    
    outline: none;
    padding-left: 10px;
    background: #ffffff;
    border: 1px solid #a2a6b0;
    box-sizing: border-box;
    border-radius: 5px;
  }


  .rightform {
  border: 1px solid black;
  width: 90%;
  margin: auto;
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  padding-left: 20px;
  text-align: left;
  margin-bottom: 20px;
  h4 {
    font-size: 15px;
  }
}

  }
`;

export default FormAccepting;
