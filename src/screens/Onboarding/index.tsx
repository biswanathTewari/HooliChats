import React from 'react';
import {Dimensions, Animated} from 'react-native';
import {
  View,
  Text,
  Center,
  Heading,
  FlatList,
  VStack,
  HStack,
  Button,
  Pressable,
} from 'native-base';
import Svg, {Path} from 'react-native-svg';
// @ts-ignore: typescript support is not yet available
import SVGPath from 'art/modes/svg/path';
// @ts-ignore: typescript support is not yet available
import {Tween} from 'art/morph/path';

import {
  PersonOneSvg,
  PersonTwoSvg,
  PersonThreeSvg,
  Dummy1,
  Dummy2,
  Dummy3,
} from '../../assets';
import {hs, ms, vs} from '../../utils';
import {AnimatedVisiuals, FriendsCircle, Indicator} from './HelperComponents';

const {width} = Dimensions.get('window');
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const startPath = `M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z`;
const endPath = `M27.704,8.397c-0.394-0.391-1.034-0.391-1.428,0  L11.988,22.59l-6.282-6.193c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414l6.999,6.899  c0.39,0.386,1.039,0.386,1.429,0L27.704,9.811C28.099,9.421,28.099,8.787,27.704,8.397C27.31,8.006,28.099,8.787,27.704,8.397z`;

export type GreetingType = {
  title: string;
  description: string;
  image: JSX.Element;
};

const Greetings: Array<GreetingType> = [
  {
    title: 'Connect with Friends and Family',
    description:
      'Connecting with Family and Friends provides a sense of belonging and security ',
    image: <PersonThreeSvg width={width / 2} height={width / 2} />,
  },
  {
    title: 'Make new friends with ease',
    description:
      'Allowing you to make new Friends is our Number one priority.....',
    image: <PersonTwoSvg width={width / 2} height={width / 2} />,
  },
  {
    title: 'Express yourself to the world',
    description:
      'Let your voice be heard on the internet through the OFOFO features on the App without restrictions',
    image: <PersonOneSvg width={width / 2} height={width / 2} />,
  },
];

const Onboarding = () => {
  let carouselIndex = React.useRef(0).current;
  const carouselRef = React.useRef<typeof FlatList>(null);
  const pathRef = React.useRef<typeof Path>(null);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  // @ts-ignore
  const YOLO: Animated.Value = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const animatedArrow = React.useRef(new Animated.Value(0)).current;
  const svgTransition = Tween(startPath, endPath);
  const p = new SVGPath();

  const onNext = () => {
    if (carouselIndex < Greetings.length - 1) {
      // @ts-ignore: Object is 'null' initially.
      carouselRef.current?.scrollToIndex({
        index: carouselIndex + 1,
        animated: true,
      });
    }
  };

  React.useEffect(() => {
    animatedArrow.addListener(({value}) => {
      svgTransition.tween(value);
      svgTransition.applyToPath(p);

      // @ts-ignore: Object is 'null' initially.
      pathRef.current?.setNativeProps({
        d: p.toSVG(),
      });
    });

    return () => animatedArrow.removeAllListeners();
  }, []);

  return (
    <VStack safeArea flex={1} justifyContent={'space-between'}>
      <AnimatedVisiuals scrollX={YOLO} />
      <View
        position={'absolute'}
        top={'0'}
        left={'0'}
        right={'0'}
        height={'50%'}>
        <FriendsCircle
          scrollX={YOLO}
          x={hs(50)}
          dx={hs(25)}
          y={vs(50)}
          dy={vs(25)}
          svg={<Dummy1 />}
        />
        <FriendsCircle
          scrollX={YOLO}
          x={hs(255)}
          dx={hs(295)}
          y={vs(80)}
          dy={vs(30)}
          svg={<Dummy2 />}
        />
        <FriendsCircle
          scrollX={YOLO}
          x={hs(55)}
          dx={hs(45)}
          y={vs(280)}
          dy={vs(320)}
          svg={<Dummy3 width={hs(25)} height={hs(25)} />}
        />
      </View>

      <View flex={0.75}>
        <AnimatedFlatList
          // @ts-ignore: Custom Animated FlatList
          ref={carouselRef}
          // @ts-ignore: Custom Animated FlatList
          data={Greetings}
          keyExtractor={(_: any, index: number) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}: any) => (
            <Center flex={1} width={width}>
              <Center flex={1} width={width}>
                <View bg={'primary.500'} p={ms(5)} borderRadius={'full'}>
                  {item.image}
                </View>
              </Center>
              <View width={width} px={hs(20)}>
                <Heading mb={vs(4)} fontFamily={'Poppins-Bold'}>
                  {item.title}
                </Heading>
                <Text
                  fontSize={ms(16)}
                  fontWeight={'500'}
                  fontFamily={'Poppins-Regular'}>
                  {item.description}
                </Text>
              </View>
            </Center>
          )}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={(info: any) => {
            carouselIndex = info.viewableItems[0].index;
            if (carouselIndex === 2) {
              Animated.timing(animatedArrow, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
              }).start();
            } else if (animatedArrow !== new Animated.Value(0)) {
              Animated.timing(animatedArrow, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
              }).start();
            }
          }}
          mb={vs(10)}
        />
      </View>

      <Indicator scrollX={scrollX} Greetings={Greetings} />
      <HStack
        //bg={'red.400'}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
        p={ms(5)}>
        <Button height={ms(50)}>
          <Text fontSize={ms(16)} fontWeight={'500'}>
            Skip
          </Text>
        </Button>
        <Pressable onPress={onNext}>
          <Svg width={ms(50)} height={ms(50)}>
            {/* @ts-ignore: Object is 'null' initially. */}
            <Path d={startPath} stroke="black" fill="black" ref={pathRef} />
          </Svg>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default Onboarding;
