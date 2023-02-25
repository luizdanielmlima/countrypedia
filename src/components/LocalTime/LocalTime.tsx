import React, { FC, useMemo } from 'react';
import moment from 'moment';
import styled from 'styled-components';

export const LocalTimeWrapper = styled.div`
  margin-left: ${(props) => props.theme.spacings.medium};

  p {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const LocalTime: FC<{ timezone: number }> = ({ timezone }) => {
  const localTime = useMemo(() => {
    const timezoneDiff = timezone ? timezone : 0;

    const date = moment().add(timezoneDiff, 's');
    const timeFormat = 'hh:mm A';

    const hoursMin = date.utc().format(timeFormat);
    return hoursMin;
  }, [timezone]);

  return (
    <LocalTimeWrapper>
      <p>{localTime}</p>
    </LocalTimeWrapper>
  );
};

export default LocalTime;
