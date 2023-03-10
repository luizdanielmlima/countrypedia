export interface ThemeModel {
  name: string;
  fontSizes: {
    xxSmall: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
  spacings: {
    xxSmall: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
  };
  colors: {
    background: string;
    surface: string;
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
    tertiary: string;
    tertiaryVariant: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
  shadows: {
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
    upXSmall: string;
    upSmall: string;
    upMedium: string;
    upLarge: string;
    upXLarge: string;
    upXxLarge: string;
  };
}

export const darkTheme: ThemeModel = {
  name: 'dark',
  fontSizes: {
    xxSmall: '12px',
    xSmall: '16px',
    small: '20px',
    medium: '28px',
    large: '32px',
    xLarge: '44px',
  },
  spacings: {
    xxSmall: '4px',
    xSmall: '8px',
    small: '12px',
    medium: '16px',
    large: '24px',
    xLarge: '32px',
    xxLarge: '48px',
  },
  colors: {
    background: '#2E3135',
    surface: '#49545B',
    primary: '#D5E9EA',
    primaryVariant: '#A0D2D5',
    secondary: '#849CC3',
    secondaryVariant: '#ACA9BB',
    tertiary: '#c0c0c0',
    tertiaryVariant: '#cacaca',
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '15px',
    xLarge: '20px',
  },
  shadows: {
    xSmall: '0px 1px 2px rgba(172, 167, 203, 0.05)',
    small:
      '0px 1px 3px rgba(172, 167, 203, 0.1), 0px 1px 2px -1px rgba(172, 167, 203, 0.1)',
    medium:
      '0px 4px 6px -1px rgba(172, 167, 203, 0.1), 0px 2px 4px -2px rgba(172, 167, 203, 0.1)',
    large:
      '0px 10px 15px -3px rgba(172, 167, 203, 0.1), 0px 4px 6px -4px rgba(172, 167, 203, 0.1)',
    xLarge:
      '0px 20px 25px -5px rgba(172, 167, 203, 0.1), 0px 8px 10px -6px rgba(172, 167, 203, 0.1)',
    xxLarge: '0px 25px 50px -12px rgba(172, 167, 203, 0.25)',
    upXSmall: '0px -1px 2px rgba(172, 167, 203, 0.05)',
    upSmall:
      '0px -1px 3px rgba(172, 167, 203, 0.1), 0px -1px 2px -1px rgba(172, 167, 203, 0.1)',
    upMedium:
      '0px -4px 6px -1px rgba(172, 167, 203, 0.1), 0px -2px 4px -2px rgba(172, 167, 203, 0.1)',
    upLarge:
      '0px -10px 15px -3px rgba(172, 167, 203, 0.1), 0px -4px 6px -4px rgba(172, 167, 203, 0.1)',
    upXLarge:
      '0px -20px 25px -5px rgba(172, 167, 203, 0.1), 0px -8px 10px -6px rgba(172, 167, 203, 0.1)',
    upXxLarge: '0px -25px 50px -12px rgba(172, 167, 203, 0.25)',
  },
};

export const lightTheme: ThemeModel = {
  ...darkTheme,
  name: 'light',
  colors: {
    background: '#e2e2e2',
    surface: '#efefef',
    primary: '#087f8c',
    primaryVariant: '#00A9C8',
    secondary: '#FF9A6C',
    secondaryVariant: '#AA7258',
    tertiary: '#98684C',
    tertiaryVariant: '#D09C7D',
  },
  shadows: {
    xSmall: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    small:
      '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px -1px rgba(16, 24, 40, 0.1)',
    medium:
      '0px 4px 6px -1px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.1)',
    large:
      '0px 10px 15px -3px rgba(16, 24, 40, 0.1), 0px 4px 6px -4px rgba(16, 24, 40, 0.1)',
    xLarge:
      '0px 20px 25px -5px rgba(16, 24, 40, 0.1), 0px 8px 10px -6px rgba(16, 24, 40, 0.1)',
    xxLarge: '0px 25px 50px -12px rgba(16, 24, 40, 0.25)',
    upXSmall: '0px -1px 2px rgba(16, 24, 40, 0.05)',
    upSmall:
      '0px -1px 3px rgba(16, 24, 40, 0.1), 0px -1px 2px -1px rgba(16, 24, 40, 0.1)',
    upMedium:
      '0px -4px 6px -1px rgba(16, 24, 40, 0.1), 0px -2px 4px -2px rgba(16, 24, 40, 0.1)',
    upLarge:
      '0px -10px 15px -3px rgba(16, 24, 40, 0.1), 0px -4px 6px -4px rgba(16, 24, 40, 0.1)',
    upXLarge:
      '0px -20px 25px -5px rgba(16, 24, 40, 0.1), 0px -8px 10px -6px rgba(16, 24, 40, 0.1)',
    upXxLarge: '0px -25px 50px -12px rgba(16, 24, 40, 0.25)',
  },
};
