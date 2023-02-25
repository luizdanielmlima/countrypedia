import React, { FC, useMemo } from 'react';

import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

import { Weather } from '../../models/ForeCast';

export const StyledSVGIcon = styled(ReactSVG)<{ svgcolor: string }>`
  width: 90px;
  height: 90px;
  /* margin: ${(props: any) => props.theme.spacings.xSmall} 0; */

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme, svgcolor }) => theme.colors[svgcolor]};
  }
`;
const ICON_URL = '/icons/weather-';

const WeatherIcon: FC<{ condition: Partial<Weather> }> = ({
  condition,
}) => {
  const { main, description } = condition;

  // see https://openweathermap.org/weather-conditions

  const icon = useMemo(() => {
    switch (main) {
      case 'thunderstorm':
        if (description?.includes('rain')) {
          return {
            label: 'lightning-rainy',
            color: 'primary',
          };
        }
        return {
          label: 'lightning',
          color: 'primary',
        };
      case 'drizzle':
        return {
          label: 'pouring',
          color: 'primary',
        };
      case 'rain':
        return {
          label: 'pouring',
          color: 'primary',
        };
      case 'snow':
        if (description?.includes('sleet')) {
          return {
            label: 'hail',
            color: 'primaryVariant',
          };
        }
        if (description?.includes('rain and snow')) {
          return {
            label: 'snowy-rainy',
            color: 'primaryVariant',
          };
        }
        if (description?.includes('heavy')) {
          return {
            label: 'snowy-heavy',
            color: 'primaryVariant',
          };
        }
        return {
          label: 'snowy',
          color: 'primaryVariant',
        };
      case 'clear':
        return {
          label: 'sunny',
          color: 'secondary',
        };
      case 'clouds':
        if (description === 'overcast clouds') {
          return {
            label: 'cloudy',
            color: 'primary',
          };
        }
        return {
          label: 'partly-cloudy',
          color: 'secondary',
        };
      case 'mist':
      case 'smoke':
      case 'haze':
      case 'dust':
      case 'fog':
      case 'sand':
      case 'ash':
      case 'squall':
      case 'tornado':
        return {
          label: 'fog',
          color: 'primary',
        };
      default:
        return {
          label: 'unknown',
          color: 'primary',
        };
    }
  }, [description, main]);

  return (
    <StyledSVGIcon
      src={`${ICON_URL}${icon.label}.svg`}
      width="100%"
      height="100%"
      svgcolor={icon.color}
      aria-label={`label:${icon.label}_color:${icon.color}`}
    />
  );
};

export default WeatherIcon;
