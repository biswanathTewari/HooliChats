import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {Onboarding} from '../screens';
import {useAppSelector, useAppDispatch} from '../hooks';
import {isFirstTimeUser, setFirstTime} from '../store';

export type MainStackNavigationProps = StackNavigationProp<ScreensList, 'Home'>;

type ScreensList = {
  Home: undefined;
  Onboarding: undefined;
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
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
