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
import RulesPage from './RulesPage';
import AddRulesView from './AddRulesView';
import MenuDrawer from './MenuDrawer';

function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  return {
    nav: state.nav,
  }
}

const DrawerMenu = DrawerNavigator(
  {
    Home: { screen: ShellPage, },
    //Shell: { screen: ShellPage},
    //Rules: { screen: RulesPage, },
    //AddRules: { screen: AddRulesView, },
  },
  {
    contentComponent: props => <MenuDrawer {...props} />,
  }
)


export const AppNavigator = StackNavigator(
  //export const AppNavigator = DrawerNavigator(
  {
    Home: { screen: DrawerMenu, },
    //Home: { screen: ShellPage, },
    //Shell: { screen: ShellPage},
    Rules: { screen: RulesPage, },
    AddRules: { screen: AddRulesView, },
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