import React from 'react';
import styled from 'styled-components';

export const CountryMapWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const CountryMap = () => {
  return (
    <CountryMapWrapper>
      <img src="./map_placeholder.png" alt="map placeholder" />
    </CountryMapWrapper>
  );
};

export default CountryMap;
