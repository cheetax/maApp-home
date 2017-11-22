import { AppRegistry } from 'react-native';
import ShellView from './Views/ShellView';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import React, { Component } from 'react';

const store = createStore(rootReducer);

class App extends Component {
    
      render() {
        return (
          <Provider store={store}>
            <ShellView/>
          </Provider>
        );
      }
    }

AppRegistry.registerComponent('myApp', () => App);
