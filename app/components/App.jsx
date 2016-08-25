import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducer/index';
import TodoApp from './TodoApp';
import Counts from './Counts';
import StyleSelector from './StyleSelector';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id="content">
          <h1>&nbsp;</h1>
          <h2>Immutable!</h2>
          <StyleSelector>
            <div style={{'display': 'flex'}}>
              <TodoApp />
              <Counts />
            </div>
          </StyleSelector>
        </div>
      </Provider>
    );
  }
}
