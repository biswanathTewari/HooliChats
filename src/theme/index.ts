import {extendTheme} from 'native-base';
import colors from './colors';

const customTheme = extendTheme({
  colors,
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default customTheme;
