import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import customTheme from './theme';
import RootNavigator from './navigation';
import {store} from './store';

export const persistor = persistStore(store);

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};
export default App;
