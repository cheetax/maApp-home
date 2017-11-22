import React, { Component } from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { connect } from "react-redux";

import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import MainView from './MainView';

const store = createStore(rootReducer);

export default class ShellView extends Component {

  render() {
    return (
      <Provider store={store}>
        <View >
          <Text>
            ShellView!
        </Text>
          <MainView />
        </View>
      </Provider>

    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  }
}
AppRegistry.registerComponent('ShellView', () => ShellView);
//export default connect(mapStateToProps)(ShellView);