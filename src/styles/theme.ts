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
    light: string;
    dark: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
}

export const darkTheme: ThemeModel = {
  name: 'dark',
  fontSizes: {
    xxSmall: '16px',
    xSmall: '20px',
    small: '24px',
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
    light: '#000',
    dark: '#FFF',
    primary: '#BF5AF2',
    secondary: '#FFD60A',
    tertiary: '#0A84FF',
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '15px',
    xLarge: '20px',
  },
};

export const lightTheme: ThemeModel = {
  ...darkTheme,
  name: 'light',
  colors: {
    light: '#E3E3E3',
    dark: '#1C1C1C',
    primary: '#8517BB',
    secondary: '#D8B400',
    tertiary: '#0A84FF',
  },
};
