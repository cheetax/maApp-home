import ShellView from "./views/ShellView"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import React, { Component } from 'react';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ShellView />
      </Provider>
    );
  }
}