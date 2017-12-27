//import RootPage from "./views/RootPage"
import RootPage from './views/RootPage';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/index";
import ShellPage from './views/ShellPage';
import {saveRules} from './actions/actionUsers';
import React, { Component } from 'react';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => saveRules(store.getState().rules));

export default class App extends Component {
  static navigationOptions = {
    title: 'Battle of Wizards Assistans',
    headerStyle: {
      backgroundColor: '#03A9F4',
      height: 30,
      justifyContent: 'center',
      //alignItems: 'center'
    },
    headerTitleStyle: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      //   margin: 5,
  
    },
  
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