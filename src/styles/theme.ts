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
    background: '#111',
    surface: '#222',
    primary: '#e0e0e0',
    primaryVariant: '#eaeaea',
    secondary: '#d0d0d0',
    secondaryVariant: '#dadada',
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
    xSmall: '0px 1px 2px rgba(255, 250, 205, 0.05)',
    small:
      '0px 1px 3px rgba(255, 250, 205, 0.1), 0px 1px 2px -1px rgba(255, 250, 205, 0.1)',
    medium:
      '0px 4px 6px -1px rgba(255, 250, 205, 0.1), 0px 2px 4px -2px rgba(255, 250, 205, 0.1)',
    large:
      '0px 10px 15px -3px rgba(255, 250, 205, 0.1), 0px 4px 6px -4px rgba(255, 250, 205, 0.1)',
    xLarge:
      '0px 20px 25px -5px rgba(255, 250, 205, 0.1), 0px 8px 10px -6px rgba(255, 250, 205, 0.1)',
    xxLarge: '0px 25px 50px -12px rgba(255, 250, 205, 0.25)',
    upXSmall: '0px -1px 2px rgba(255, 250, 205, 0.05)',
    upSmall:
      '0px -1px 3px rgba(255, 250, 205, 0.1), 0px -1px 2px -1px rgba(255, 250, 205, 0.1)',
    upMedium:
      '0px -4px 6px -1px rgba(255, 250, 205, 0.1), 0px -2px 4px -2px rgba(255, 250, 205, 0.1)',
    upLarge:
      '0px -10px 15px -3px rgba(255, 250, 205, 0.1), 0px -4px 6px -4px rgba(255, 250, 205, 0.1)',
    upXLarge:
      '0px -20px 25px -5px rgba(255, 250, 205, 0.1), 0px -8px 10px -6px rgba(255, 250, 205, 0.1)',
    upXxLarge: '0px -25px 50px -12px rgba(16, 24, 40, 0.25)',
  },
};

export const lightTheme: ThemeModel = {
  ...darkTheme,
  name: 'light',
  colors: {
    background: '#e2e2e2',
    surface: '#efefef',
    primary: '#087f8c',
    primaryVariant: '#087f8c',
    secondary: '#ff8c42',
    secondaryVariant: '#ff8c42',
    tertiary: '#031926',
    tertiaryVariant: '#031926',
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
