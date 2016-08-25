import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducer/index';
import ForkMe from './ForkMe';
import TodoApp from './TodoApp';
import Counts from './Counts';
import StyleSelector from './StyleSelector';

const enhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = createStore(reducer, enhancer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id="content">
          <ForkMe />
          <h2>Immutable React</h2>
          <p>Hit F12 and watch the console.</p>
          <p>The point of this demo is to use <a href='https://facebook.github.io/react/'>React</a> and <a href='http://redux.js.org/'>Redux</a> with <a href='https://facebook.github.io/immutable-js/'>ImmutableJS</a> and <a href='https://github.com/reactjs/reselect'>Reselect</a> so that we can calculate state and render as little as possible.</p>
          <StyleSelector>
            <div className='main-content'>
              <TodoApp />
              <Counts />
            </div>
          </StyleSelector>
        </div>
      </Provider>
    );
  }
}
