import ShellView from "./views/ShellView"
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import React, { Component } from 'react';

const store = createStore(rootReducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ShellView />
      </Provider>
    );
  }
}