import React from 'react';
import {Text, VStack, Heading, Button, HStack, Pressable} from 'native-base';

import {hs, ms, vs} from '../../utils';
import {useAuthForm} from '../../hooks';
import {TextInput, showToast} from '../../components';
import {useAppDispatch} from '../../hooks';
import {loginStart} from '../../store';

const Login = () => {
  const {
    creds,
    error,
    onBlurHandler,
    onChangeHandler,
    validateForm,
    resetForm,
  } = useAuthForm({checkErrorMsg: '', optionalCheck: true});
  const dispatch = useAppDispatch();

  const loginHandler = async (userName: string, password: string) => {
    dispatch(loginStart({userName, password}));
    resetForm();
    //navigate(from, { replace: true })
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      loginHandler(creds.userName, creds.password);
    } else {
      showToast('Bhai kya kar raha hai tu? hack kar');
    }
  };

  return (
    <VStack safeArea {...styles.container}>
      <VStack flex={1}>
        <Heading {...styles.heading}>Sign In</Heading>
        <Text {...styles.subHeading}>Enter your credentials</Text>
        <TextInput
          id="userName"
          defaultValue="iambizan"
          label="Username"
          placeholder="Enter your username"
          type="text"
          value={creds.userName}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          isRequired={true}
          // @ts-ignore: checking for dyanmic key
          isInvalid={error && error.userName ? true : false}
          // @ts-ignore: checking for dyanmic key
          errorMessage={error && error.userName ? error.userName : ''}
          helperText="Your username is your unique identity"
        />
        <TextInput
          id="password"
          defaultValue="bizanisthebest"
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={creds.password}
          onChangeHandler={onChangeHandler}
          onBlurHandler={onBlurHandler}
          isRequired={true}
          // @ts-ignore: checking for dyanmic key
          isInvalid={error && error.password ? true : false}
          // @ts-ignore: checking for dyanmic key
          errorMessage={error && error.password ? error.password : ''}
          helperText="Your password is safe with us"
        />
      </VStack>
      <VStack {...styles.bottomContainer}>
        <Button onPress={onSubmitHandler} {...styles.button}>
          Done
        </Button>
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
