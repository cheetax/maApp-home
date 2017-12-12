import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
} from 'react-native';

import ItemStaticView from './ItemStaticView';


function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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
    var ruleGold = rules.Gold.filter((value, index, array) => {
      var result = false;
      if (user.option >= value.minParam && user.option <= value.maxParam) {
        result = true;
      } return result;
    })[0];
    if (ruleGold) {userRules.push({ ruleGold });}
    //element.name = user.name;
    Object.assign(element, user);
    userRules.map((rule) => {
      Object.assign(element, rule);
    })
     
    usersExp.push(element);
  });
  return {
    items: ds.cloneWithRows(state.clanInfo.expirienceUsers),
  }
}

function mapDispatcherToProps(dispatch) {
  return {

  }
}

class StatisticView extends Component {

  _keyExtractor = (item, index) => item.index;

  _renderRow(item) {
    return <ItemStaticView key={item} keyVal={item} item={item} />
  }

  render() {
    //console.log('map', this.props.items);

    return (
      <View style={styles.container}>
        <ListView dataSource={this.props.items}
          renderRow={this._renderRow}
          enableEmptySections={true}>
        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
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

export default connect(mapStateToProps, mapDispatcherToProps)(StatisticView);