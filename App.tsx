import React from 'react';
import { View } from 'react-native';
import Clock from './src/screens/TodoList/Clock';
import PaginateList from './src/screens/TodoList/PaginateList';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Accordion from './src/screens/TodoList/Accordion';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigation from './src/navigation/StackNavigation';
// import TodoListScreen from './src/screens/TodoList/TodoListScreen';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}

export default App;
