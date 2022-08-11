import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigationStack from './src/navigation/navtionRoutes/RootNavigation';
import {Provider} from 'react-redux'
import {store} from './src/redux/store/store'

function App(){
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigationStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App