import 'react-native-gesture-handler';
import React from 'react';
import {RootNavigation} from './src/navigators';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
