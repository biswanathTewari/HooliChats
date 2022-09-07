import React from 'react';
import {Text, VStack, Heading, Button, HStack, Pressable} from 'native-base';

import {hs, ms, vs} from '../../utils';
import {TextInput} from '../../components';

const Login = () => {
  return (
    <VStack safeArea {...styles.container}>
      <VStack flex={1}>
        <Heading {...styles.heading}>Sign In</Heading>
        <Text {...styles.subHeading}>Enter your credentials</Text>
        <TextInput
          defaultValue=""
          label="Email"
          placeholder="Enter your email"
          type="email"
          isRequired={true}
          isInvalid={false}
          errorMessage="Email is required"
          helperText="We will never share your email"
        />
        <TextInput
          defaultValue=""
          label="Password"
          placeholder="Enter your password"
          type="password"
          isRequired={true}
          isInvalid={false}
          errorMessage="Password is required"
          helperText="Your password is safe with us"
        />
      </VStack>
      <VStack {...styles.bottomContainer}>
        <Button {...styles.button}>Done</Button>
        <HStack {...styles.msg}>
          <Text {...styles.msgTxt}>Don't have an account? </Text>
          <Pressable>
            <Text {...styles.msgLink}>Sign Up</Text>
          </Pressable>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Login;

const styles = {
  container: {
    flex: 1,
    px: hs(30),
    py: vs(20),
  },
  heading: {
    fontSize: ms(22),
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    py: vs(2),
    mt: vs(50),
  },
  subHeading: {
    fontSize: ms(16),
    fontFamily: 'Poppins-Regular',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  button: {
    width: '100%',
    py: vs(12),
    backgroundColor: 'primary.700',
    borderRadius: 'lg',
    _text: {
      color: 'white',
      fontSize: ms(18),
      fontWeight: '600',
      fontFamily: 'Poppins-Regular',
    },
  },
  msg: {
    py: vs(20),
    alignItems: 'center',
  },
  msgTxt: {
    fontSize: ms(14),
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: 'black',
  },
  msgLink: {
    fontSize: ms(14),
    fontFamily: 'Poppins-Regular',
    color: 'primary.700',
    fontWeight: '400',
  },
};
