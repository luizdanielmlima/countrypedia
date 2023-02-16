import styled from 'styled-components';

export const CountryCardHeader = styled.div`
  position: relative;
  min-height: 2rem;
  width: 100%;
  text-align: center;
`;

export const CountryCardTitle = styled.p<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;
`;

export const CountryCardRegion = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
`;

export const CountryCardWrapper = styled.div`
  padding: 16px;
  cursor: pointer;
  border: 1px solid #eee;
  width: 160px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 10px 15px -3px rgba(16, 24, 40, 0.1),
      0px 4px 6px -4px rgba(16, 24, 40, 0.1);

    img {
      filter: grayscale(0%);
    }

    ${CountryCardTitle} {
      color: black;
      font-weight: 900;
    }
  }
`;

export const CountryCardFlagWrapper = styled.figure`
  height: 90px;
  width: 100%;
  margin: 16px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    filter: grayscale(80%);
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CountryCardFlag = styled.img`
  border: 1px solid #ccc;
`;

export const CountryCardBody = styled.div`
  text-align: center;
  width: 100%;
`;
export const CountryCardFooter = styled.div`
  text-align: center;
  width: 100%;
`;
