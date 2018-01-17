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
//import ShellPage from './ShellPage';
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

// const DrawerMenu = DrawerNavigator(
//   {
//     //Home: { screen: ShellPage, },
//     Home: { screen: ClanView, },
//     Statistic: { screen: StatisticPage},
//   },
//   {
//     contentComponent: props => <MenuDrawer {...props} />,
//   }
// )

export const AppNavigator = StackNavigator(
//export const AppNavigator = DrawerNavigator(
  {
    //Home: { screen: DrawerMenu, },
    Home: { screen: ClanView, },
    //Shell: { screen: ShellPage},
    Rules: { screen: RulesPage, },
    AddRules: { screen: AddRulesView, },
    Statistic: { screen: StatisticPage},
  },
  {
    //contentComponent: props => <MenuDrawer {...props} />,
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
        alignSelf: 'stretch'
      },
    }

  },
);

const ShellPage = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

// RootPage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(ShellPage);