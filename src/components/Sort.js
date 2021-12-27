import React from "react";
import { useFilterContext } from "../context/filter_context";
import styled from "styled-components";
const Sort = () => {
  const {
    filtered_products: products,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div>
        <p>{products.length} məhsul tapıldı</p>
      </div>

      <div>
        <form>
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={updateSort}
            className="sort-input"
          >
            <option value="name-a">Ada görə(A-Z)</option>
            <option value="name-z">Ada görə(Z-A)</option>
            <option value="price-lowest">Qiymətə görə(A-Y)</option>
            <option value="price-highest">Qiymətə görə(Y - A)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border: 1px solid black;
    border-radius: 20px;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 9px;
    outline: none;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
