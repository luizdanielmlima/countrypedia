import React, { FC, useState } from 'react';
import { FiltersWrapper, FilterWrapper } from './Filters.styled';

export interface FilterProps {
  region: string;
  orderBy: string;
  onRegionSelected: (sel: string) => void;
  onOrderBySelected: (sel: string) => void;
}

const Filters: FC<FilterProps> = ({
  region,
  orderBy,
  onRegionSelected,
  onOrderBySelected,
}) => {
  // const [selectedOrderBy, setSelectedOrderBy] = useState('name');
  // const [selectedRegion, setSelectedRegion] = useState('europe');

  const handleOrderByChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    // event.preventDefault();
    const selection = event.target.value;
    onOrderBySelected(selection);
  };

  const handleRegionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selection = event.target.value;
    onRegionSelected(selection);
  };
  return (
    <FiltersWrapper>
      <FilterWrapper>
        <label htmlFor="order-by">Order By:</label>
        <select
          name="order-options"
          id="order-by"
          value={orderBy}
          onChange={(e) => handleOrderByChange(e)}
        >
          <option value="commonName">Alphabetically</option>
          <option value="population">Population</option>
          <option value="area">Area</option>
        </select>
      </FilterWrapper>
      <FilterWrapper>
        <label htmlFor="region">Region:</label>
        <select
          name="regions-options"
          id="region"
          value={region}
          onChange={(e) => handleRegionChange(e)}
        >
          <option value="all">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </FilterWrapper>
    </FiltersWrapper>
  );
};

export default Filters;
