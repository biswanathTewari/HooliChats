import React from 'react';
import {
  Text,
  VStack,
  Heading,
  Button,
  HStack,
  Pressable,
  ScrollView,
} from 'native-base';

import {hs, ms, vs} from '../../utils';
import {TextInput, showToast} from '../../components';
import {useAuthForm, useAppDispatch} from '../../hooks';
import {signupStart} from '../../store';

const Signup = () => {
  const dispatch = useAppDispatch();
  const {
    creds,
    error,
    onBlurHandler,
    onChangeHandler,
    validateForm,
    resetForm,
  } = useAuthForm({checkErrorMsg: '', optionalCheck: false});

  const signupHanlder = async (
    userName: string,
    password: string,
    fullName: string,
    email: string = '',
  ) => {
    dispatch(signupStart({userName, password, fullName, email}));
    resetForm();
    //navigate(from, { replace: true })
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      signupHanlder(
        creds.userName,
        creds.password,
        creds.fullName,
        creds.email,
      );
    } else {
      showToast('Bhai kya kar raha hai tu? hack kar');
    }
  };
  return (
    <VStack safeArea {...styles.container}>
      <VStack flex={1}>
        <Heading {...styles.heading}>Sign Up</Heading>
        <Text {...styles.subHeading}>Create your account</Text>

        <ScrollView contentContainerStyle={styles.scroll}>
          <TextInput
            id="fullName"
            defaultValue=""
            label="Full Name"
            placeholder="Enter your name"
            type="text"
            value={creds.fullName}
            onChangeHandler={onChangeHandler}
            onBlurHandler={onBlurHandler}
            isRequired={true}
            // @ts-ignore: checking for dyanmic key
            isInvalid={error && error.fullName ? true : false}
            // @ts-ignore: checking for dyanmic key
            errorMessage={error && error.fullName ? error.userName : ''}
            helperText="Provide your full name"
          />
          <TextInput
            id="email"
            defaultValue=""
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={creds.email!}
            onChangeHandler={onChangeHandler}
            onBlurHandler={onBlurHandler}
            isRequired={true}
            // @ts-ignore: checking for dyanmic key
            isInvalid={error && error.email ? true : false}
            // @ts-ignore: checking for dyanmic key
            errorMessage={error && error.email ? error.userName : ''}
            helperText="We will never share your email"
          />
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
        </ScrollView>
      </VStack>
      <VStack {...styles.bottomContainer}>
        <Button {...styles.button} onPress={onSubmitHandler}>
          Done
        </Button>
        <HStack {...styles.msg}>
          <Text {...styles.msgTxt}>Already have an account? </Text>
          <Pressable>
            <Text {...styles.msgLink}>Sign In</Text>
          </Pressable>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Signup;

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
  scroll: {
    paddingBottom: vs(50),
  },
};
