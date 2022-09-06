import React from 'react';
import {NativeBaseProvider} from 'native-base';

import customTheme from './theme';
import RootNavigator from './navigation';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <RootNavigator />
    </NativeBaseProvider>
  );
};
export default App;
