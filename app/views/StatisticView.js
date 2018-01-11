import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import MaterialTabs from 'react-native-material-tabs';
import StatisticViewItems from './StatisticViewItems';

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';


function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  var usersExp = [];

  var exp = state.clanInfo.expirienceUsers;
  var users = state.clanInfo.users;
  var rules = state.rules;
  exp.map(element => {
    var userRules = [];
    var user = users.filter((value, index, array) => {
      var result = false;
      if (value.id === element.id) {
        result = true;
      }
      return result;
    })[0]
    var ruleExp = rules.Exp.filter((value, index, array) => {
      var result = false;
      if (user.option >= value.minParam && user.option <= value.maxParam) {
        result = true;
      }
      return result;
    })[0];
    if (ruleExp) { userRules.push({ ruleExp }); }
    else { userRules.push({ ruleExp: { minParam: 0, maxParam: 0, exp: 0 } }) }
    var ruleGold = rules.Gold.filter((value, index, array) => {
      var result = false;
      if (user.option >= value.minParam && user.option <= value.maxParam) {
        result = true;
      } return result;
    })[0];
    if (ruleGold) { userRules.push({ ruleGold }); }
    else { userRules.push({ ruleGold: { minParam: 0, maxParam: 0, exp: 0 } }) }
    //element.name = user.name;
    Object.assign(element, user);
    userRules.map((rule) => {
      Object.assign(element, rule);
    })

    usersExp.push(element);
  });
  return {
    items: state.clanInfo.expirienceUsers,
  }
}

class StatisticView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }  

  setTab = (tab) => {
    this.setState({ selectedTab: tab });
  }
  
  render() {
    //console.log('map', this.props.items);
    let items;
    switch (this.state.selectedTab) {
      case 0:
        items = [];
        break;
      case 1:
        items = this.props.items
        break;
      case 2:
        items = [];
        break;
    }
    let statisticView = <StatisticViewItems items={items} />
    return (
      <View style={styles.container}>
        <MaterialTabs
          items={['Gold', 'Exp', 'Crystal']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab.bind(this)}
          barColor="#03A9F4"
          indicatorColor="#fffe94"
          activeTextColor="white"
        />
        <View style={{ flex: 1, }} >
            
          {statisticView}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    //backgroundColor: '#fff',
    //backgroundColor: 'red'
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    margin: 10,
  },
  item: {
    alignItems: 'center',
    margin: 10,
  },
  buttonRes: {
    width: 100,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 5,
  },
  header: {
    backgroundColor: '#03A9F4',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default connect(mapStateToProps)(StatisticView);