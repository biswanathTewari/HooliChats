import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const DESIGN_HEIGHT = 640;
const DESIGN_WIDTH = 360;

const horizontalScale = (size: number) => (width / DESIGN_WIDTH) * size;
const verticalScale = (size: number) => (height / DESIGN_HEIGHT) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
export {horizontalScale as hs, verticalScale as vs, moderateScale as ms};
