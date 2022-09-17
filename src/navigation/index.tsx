import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {Onboarding, Login, Signup, Home, Chats} from '../screens';
import {useAppSelector, useAppDispatch} from '../hooks';
import {isFirstTimeUser, setFirstTime, isUserLoggedIn} from '../store';
import {setNavigator} from '../utils';

export type MainStackNavigationProps = StackNavigationProp<ScreensList, 'Home'>;

type ScreensList = {
  Home: undefined;
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  Chats: undefined;
};

const Stack = createStackNavigator<ScreensList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const navRef = React.useRef(null);
  const isFirstTime = useAppSelector(isFirstTimeUser);
  const isLoggedIn = useAppSelector(isUserLoggedIn);
  console.log(isFirstTime);

  React.useEffect(() => {
    if (isFirstTime) {
      dispatch(setFirstTime(false));
    }
    setNavigator(navRef.current);
  }, []);

  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isLoggedIn ? (
          <>
            {isFirstTime && (
              <Stack.Screen name="Onboarding" component={Onboarding} />
            )}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <Stack.Screen name="Chats" component={Chats} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
