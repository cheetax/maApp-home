import RootPage from "./views/RootPage"
import ShellPage from './views/ShellPage';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import React, { Component } from 'react';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {
  
  render() {
   // store.nav = this.props;
    return (
      <Provider store={store}>
        <ShellPage />
      </Provider>
    );
  }
}