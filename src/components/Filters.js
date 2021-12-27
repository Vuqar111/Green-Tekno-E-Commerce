import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      category,
      company,
      min_price,
      price,
      max_price,
    },
    updateFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <h5>Kateqoriyalar</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
       
          <div className="form-control">
            <h5>Qiymət Aralığı</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          

          <div className="form-control">
            <h5>Brendlər</h5>
            <div>
              {companies.map((c, index) => {
                return (
                  <div >
                    <input
                      key={index}
                      onClick={updateFilters}
                      name="company"
                      className={`${
                        company === c.toLowerCase() ? "active" : null
                      }`}
                      type="radio"
                      id={c}
                      value={c}
                    ></input>
                    <label for={c}>{c}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

input[type=range] {
    background-color: green;
}

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      font-size: 24px;
      font-weight: 700;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid var(--clr-grey-5);
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  input[type='radio']  {
        width: 18px;
        height: 18px;
        color: var(--main-color);

        background: var(--main-color);
  }   


  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    background: transparent;
    font-size: 16px;
    
    border: none;
    color: var(--black);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }


  .form-control label {
    padding-left: 6px;
    font-size: 16px;
    line-height: 24px;
    font-weight: bolder;
    color: var(--black);
    font-family: "Poppins", sans-serif;  
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    font-weight: bolder;
    color: var(--main-color);
    font-size: 18px;
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
