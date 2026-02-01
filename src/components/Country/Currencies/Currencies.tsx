import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Currency } from '../../../models/Country';

export const CurrenciesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CurrencyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  p:not(:first-child) {
    margin: 0 ${(props) => props.theme.spacings.xxSmall};
  }
`;

const Currencies: FC<{ currencies: Record<string, Currency> }> = ({
  currencies,
}) => {
  const currenciesArr = useMemo(() => {
    if (currencies) {
      const currencArr = Object.entries(currencies);
      return currencArr.map((cur) => cur[1]);
    }
    return [];
  }, [currencies]);

  return (
    <CurrenciesWrapper>
      {currenciesArr &&
        currenciesArr.length > 0 &&
        currenciesArr.map((cur, index) => {
          return (
            <CurrencyItem key={`${index}_${cur.symbol}`}>
              <p>{cur.name}</p>
              <p>{cur.symbol}</p>
              <p>{index !== currenciesArr.length - 1 && ` | `}</p>
            </CurrencyItem>
          );
        })}
    </CurrenciesWrapper>
  );
};

export default Currencies;
