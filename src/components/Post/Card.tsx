import React from 'react';
import {
  Text,
  View,
  Card as MyCard,
  HStack,
  Image,
  Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {SPACING} from '../../constants';
import {hs, ms, vs} from '../../utils';

interface IProps {
  userImg: string;
  userName: string;
  postedAt: string;
  postImg: string;
  postDesc: string;
  noLikes: number;
  noComments: number;
}

const Card = ({
  userImg,
  userName,
  postedAt,
  postDesc,
  postImg,
  noComments,
  noLikes,
}: IProps) => {
  const displayContext =
    postDesc.length > 75 ? postDesc.slice(0, 75) + '...' : postDesc;
  return (
    <MyCard {...styles.card}>
      <HStack {...styles.header}>
        <View {...styles.userImgContainer}>
          <Image {...styles.userImg} src={userImg} />
        </View>
        <View {...styles.userInfo}>
          <Text {...styles.userName}>{userName}</Text>
          <Text {...styles.postedAt}>{postedAt}</Text>
        </View>
      </HStack>
      <Text {...styles.postDesc}>{displayContext}</Text>
      <View {...styles.postImgContainer}>
        <Image {...styles.postImg} src={postImg} />
      </View>

      <HStack {...styles.iconWrapper}>
        {/* @ts-ignore */}
        <Icon.Button
          name="hearto"
          backgroundColor={'transparent'}
          color={'#000'}
          onPress={() => {}}>
          <Text>{noLikes}</Text>
        </Icon.Button>
        {/* @ts-ignore */}
        <MaterialIcons.Button
          name="comment"
          backgroundColor={'transparent'}
          color={'#000'}
          onPress={() => {}}>
          <Text>{noComments}</Text>
        </MaterialIcons.Button>
      </HStack>

      <Pressable>
        <Text {...styles.readMore}>View all {noComments} comments</Text>
      </Pressable>
    </MyCard>
  );
};

export default Card;

const styles = {
  card: {
    mx: hs(Number(SPACING.mx)),
    mt: vs(15),
    p: ms(15),
    minWidth: hs(335),
    bg: 'gray.200',
  },
  header: {
    width: '100%',
  },
  userImgContainer: {
    height: ms(50),
    width: ms(50),
    borderRadius: ms(25),
  },
  userImg: {
    height: '100%',
    width: '100%',
    borderRadius: ms(25),
  },
  userInfo: {
    ml: ms(10),
    mt: ms(5),
  },
  userName: {
    fontSize: ms(15),
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  postedAt: {
    fontSize: ms(12),
    fontFamily: 'Poppins-Regular',
    color: 'gray.500',
  },
  postDesc: {
    fontSize: ms(14),
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: 'black',
    my: vs(10),
  },
  postImgContainer: {
    height: vs(180),
    width: hs(300),
    borderRadius: ms(10),
  },
  postImg: {
    height: '100%',
    width: '100%',
    borderRadius: ms(10),
  },
  icon: {
    height: ms(100),
    width: ms(100),
  },
  iconWrapper: {
    width: '100%',
    py: vs(5),
  },
  readMore: {
    fontSize: ms(12),
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: 'gray.500',
  },
};
