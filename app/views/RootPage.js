import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import PropTypes from 'prop-types';
import ShellPage from './ShellPage';
import RulesPage from './RulesPage';
import AddRulesView from './AddRulesView';

function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  return {
    nav: state.nav,
  }
}

export const AppNavigator = StackNavigator(
  {
    Home: { screen: ShellPage, },
    //Shell: { screen: ShellPage},
    Rules: { screen: RulesPage, },
    AddRules: { screen: AddRulesView, },
  },
  {
    navigationOptions: {
      title: 'Battle of Wizards Assistans',
      headerStyle: {
        backgroundColor: '#03A9F4',
        height: 40,
      },
      headerTitleStyle: {
        fontSize: 18,
        color: '#fff',
        marginHorizontal: 0,
        textAlign: 'center',
        alignSelf: 'stretch'
      },
    }
  },
);

const RootPage = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

// RootPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(RootPage);