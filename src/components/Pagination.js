import React from 'react'
import styled from 'styled-components';
import {AiOutlineRight} from 'react-icons/ai'
const Pagination = () => {
    return (
        <Wrapper>
            <div className="paginations">
                <button className='pagination'>
                    1
                </button>
                <button className='pagination'>
                    2
                </button>
                <button className='pagination'>
                    <AiOutlineRight/>
                </button>

            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`

width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
.paginations {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

button {
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 50%
   
}
.paginations  button:nth-child(1) {
    background: var(--main-color);
    border: none;
    outline: none;
    color: white;
}
.pagination {
    width: 45px;
    height: 45px;
    background:white;
    color: black;
    border: 2px solid black;
    font-size: 20px;
    cursor: pointer;
}

`
export default Pagination
