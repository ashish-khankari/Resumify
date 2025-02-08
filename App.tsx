import React from 'react';
import { View } from 'react-native';
import Clock from './src/screens/TodoList/Clock';
import PaginateList from './src/screens/TodoList/PaginateList';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Accordion from './src/screens/TodoList/Accordion';
// import TodoListScreen from './src/screens/TodoList/TodoListScreen';

function App(): React.JSX.Element {
  return (
    <>
      {/* // <TodoListScreen /> */}
      {/* <Clock/> */}
      {/* <Provider store={store}>
        <PaginateList />
      </Provider> */}
      {/* <Accordion  /> */}
    </>
  );
}

export default App;
