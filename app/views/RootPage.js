import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import ShellPage from './ShellPage'

function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  return {
    nav: state.nav,
  }
}

export const AppNavigator = StackNavigator({
  Home: { screen: ShellPage, },
  //Shell: { screen: ShellPage},
  //Rules: { screen: RulesPage },
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