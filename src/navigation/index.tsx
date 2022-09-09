import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {Onboarding, Login, Signup} from '../screens';
import {useAppSelector, useAppDispatch} from '../hooks';
import {isFirstTimeUser, setFirstTime} from '../store';

export type MainStackNavigationProps = StackNavigationProp<ScreensList, 'Home'>;

type ScreensList = {
  Home: undefined;
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<ScreensList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const isFirstTime = useAppSelector(isFirstTimeUser);
  console.log(isFirstTime);

  React.useEffect(() => {
    if (isFirstTime) {
      dispatch(setFirstTime(false));
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isFirstTime ? 'Onboarding' : 'Login'}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
