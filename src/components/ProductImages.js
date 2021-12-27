import React, { useState } from 'react'
import styled from 'styled-components';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
const ProductImages = ({ images = [[]] }) => {

  const [main, setMain] = useState(images[0])
  return (
    <Wrapper>
      <img src={main.url} alt='' className='main ' />
      <div className='gallery'>
        <div><AiOutlineLeft/></div>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt=''
              key={index}
              className={`${image.url === main.url ? 'active' : null}`}
              onClick={() => setMain(images[index])}
            />
          )
        })}
        <div><AiOutlineRight/></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
width: 100%;
flex-direction: column;
margin-left: 0px;
padding: 0px;

  .main {
    width: 85%;
    height: 400px;
    margin-left: 0px
  }
  img {
    width: 200px;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
   
    width: 85%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0px;
    img {
      height:65px;
      width: 75px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--main-color);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }


  @media (max-width: 776px) {

    margin-left: 0px;
  .main {
    width: 100%;
    backgroun-size: cover;
    height: 250px;
    margin-left: 0px
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    background: ;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0px;
    padding: 5px;
    img {
      height: 35px;
      width: 35px;
      cursor: pointer;
      margin: 0px;
      padding: 0px;
    }
  }

  }
  

   
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
