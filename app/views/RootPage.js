import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation';
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
import ClanView from './ClanView';
import RulesPage from './RulesPage';
import StatisticPage from './StatisticPage';
import AddRulesView from './AddRulesView';
import MenuDrawer from './MenuDrawer';

function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  return {
    nav: state.nav,
  }
}

export const stackNavigator = StackNavigator(
    {
      Home: { screen: ClanView, },
      Rules: { screen: RulesPage, },
      AddRules: { screen: AddRulesView, },
      Statistic: { screen: StatisticPage},
    },
    {
      navigationOptions: {
        title: 'Battle of Wizards Assistans',

        headerStyle: {
          backgroundColor: '#03A9F4',  
          height: 56,
        },
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          marginHorizontal: 16,
          textAlign: 'left',
          alignSelf: 'stretch',
          marginHorizontal: 0,
        },
      }
  
    },
  );

export const AppNavigator = DrawerNavigator(
  {
    Shell: { screen: stackNavigator, },
  },
  {
    contentComponent: props => <MenuDrawer {...props} />,
  },
);

const RootPage = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

export default connect(mapStateToProps)(RootPage);