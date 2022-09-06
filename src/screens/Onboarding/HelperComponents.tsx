import React from 'react';
import {Dimensions, Animated} from 'react-native';
import {View, Text, Center, Heading, FlatList, VStack} from 'native-base';

import {GreetingType} from './index';
import {PersonOneSvg, PersonTwoSvg, PersonThreeSvg, Dummy1} from '../../assets';

const {width} = Dimensions.get('window');
const AnimatedView = Animated.createAnimatedComponent(View);

const AnimatedVisiuals = ({scrollX}: {scrollX: Animated.Value}) => {
  const rotate = scrollX.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['45deg', '60deg', '45deg'],
  });

  const translateX = scrollX.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -width / 2, 0],
  });

  return (
    <AnimatedView
      position={'absolute'}
      height={'105%'}
      width={'150%'}
      top={'-55%'}
      bg={'#fff'}
      borderRadius={'3xl'}
      style={{
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const FriendsCircle = ({
  scrollX,
  x,
  y,
  dx,
  dy,
  svg,
}: {
  scrollX: Animated.Value;
  x: number;
  y: number;
  dx: number;
  dy: number;
  svg: JSX.Element;
}) => {
  const translateX = scrollX.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [x, dx, x],
  });

  const translateY = scrollX.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [y, dy, y],
  });

  return (
    <AnimatedView
      bg={'primary.500'}
      p="3"
      borderRadius={'full'}
      position={'absolute'}
      left={'3'}
      opacity={0.75}
      style={{
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
        ],
      }}>
      {svg}
    </AnimatedView>
  );
};

const Indicator = ({
  scrollX,
  Greetings,
}: {
  scrollX: Animated.Value;
  Greetings: Array<GreetingType>;
}) => {
  return (
    <View
      marginTop={'10'}
      width={width}
      flexDirection={'row'}
      justifyContent={'center'}>
      {Greetings.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        return (
          <AnimatedView
            key={index.toString()}
            bg={'primary.600'}
            opacity={opacity}
            height={'3'}
            width={'3'}
            borderRadius={'50'}
            margin={'3'}
            style={{
              transform: [{scale}],
            }}
          />
        );
      })}
    </View>
  );
};

export {AnimatedVisiuals, Indicator, FriendsCircle};
