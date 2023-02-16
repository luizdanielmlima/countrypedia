import styled from 'styled-components';

export const CountryCardWrapper = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  width: 160px;
  background-color: #fff;
`;

export const CountryCardHeader = styled.div`
  min-height: 2rem;
`;

export const CountryCardTitle = styled.p<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 600;
  text-align: center;
`;

export const CountryCardFlagWrapper = styled.figure`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CountryCardFlag = styled.img`
  border: 1px solid #ccc;
`;
