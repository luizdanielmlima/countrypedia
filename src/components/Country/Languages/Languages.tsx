import React from 'react';
import styled from 'styled-components';
import { Language } from '../../../models/Country';

export const LanguagesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const LanguageItem = styled.div`
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

const Languages = ({ languages }: { languages: Language[] }) => (
  <LanguagesWrapper>
    {languages &&
      languages.length > 0 &&
      languages.map((lang, index) => {
        return (
          <LanguageItem key={`${index}_${lang}`}>
            <p>{lang.native_name}</p>
            <p>{index !== languages.length - 1 && ` | `}</p>
          </LanguageItem>
        );
      })}
  </LanguagesWrapper>
);

export default Languages;
