import React from 'react';
import { FiltersWrapper, FilterWrapper } from './Filters.styled';

const Filters = () => {
  return (
    <FiltersWrapper>
      <FilterWrapper>
        <label htmlFor="order-by">Order By:</label>
        <select name="order-options" id="order-by">
          <option value="alphabetically">Alphabetically</option>
          <option value="population">Population</option>
          <option value="area">Area</option>
        </select>
      </FilterWrapper>
      <FilterWrapper>
        <label htmlFor="region">Region:</label>
        <select name="regions-options" id="region">
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </FilterWrapper>
    </FiltersWrapper>
  );
};

export default Filters;
