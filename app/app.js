//import RootPage from "./views/RootPage"
import RootPage from './views/RootPage';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import ShellPage from './views/ShellPage';
import { getContent, saveRules } from './actions/actionUsers';
import React, { Component } from 'react';

const customMiddleware = store => next => action => {
   console.log(action)
   return next(action)
}

const store = createStore(rootReducer, applyMiddleware(thunk, customMiddleware));



export default class App extends Component {
  // constructor(props){

  componentWillMount(){
    store.dispatch(getContent())
  }
  render() {
    // store.nav = this.props;
    return (
      <Provider store={store}>
        <RootPage />
      </Provider>
    );
  }
}