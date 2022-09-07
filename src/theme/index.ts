import {extendTheme} from 'native-base';
import colors from './colors';
import sizes from './sizes';
import space from './space';

const customTheme = extendTheme({
  colors,
  sizes,
  space,
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default customTheme;
