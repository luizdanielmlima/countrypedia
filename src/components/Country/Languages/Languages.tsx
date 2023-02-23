import React, { FC, useMemo } from 'react';
import styled from 'styled-components';

export const LanguagesWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p:not(:first-child) {
    margin: 0 ${(props) => props.theme.spacings.xxSmall};
  }
`;

const Languages: FC<{ languages: Record<string, string> }> = ({
  languages,
}) => {
  const languagesArr = useMemo(() => {
    if (languages) {
      const langsArr = Object.entries(languages);
      return langsArr.map((lang) => lang[1]);
    }
    return [];
  }, [languages]);

  return (
    <LanguagesWrapper>
      {languagesArr &&
        languagesArr.length > 0 &&
        languagesArr.map((lang, index) => {
          return (
            <LanguageItem key={`${index}_${lang}`}>
              <p>{lang}</p>
              <p>{index !== languagesArr.length - 1 && ` | `}</p>
            </LanguageItem>
          );
        })}
    </LanguagesWrapper>
  );
};

export default Languages;
