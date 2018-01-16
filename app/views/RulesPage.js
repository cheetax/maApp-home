import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveRules } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
import RulesView from './RulesView';
import MaterialTabs from 'react-native-material-tabs';

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import { Icon as ButtonIcon } from 'react-native-elements';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ListView,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

//import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';

import ItemRulesView from './ItemRulesView';


function mapStateToProps(state) {
  return {
    nav: state.nav,
    //items: state.rules.Exp,
    rules: state.rules,
  }
}

function mapDispatcherToProps(dispatch) {
  return {
    saveRules: (data) => {
      dispatch(saveRules(data));
    },
  }
}

class RulesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 0,
    };

  }

  componentWillUpdate(nextProps, nextState) {
    saveRules(nextProps.rules);
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Нормы',
    headerLeft: (
      <TouchableHighlight
        style={{
          margin: 0,
          marginLeft: 8,
          width: 40,
          height: 40,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center'          
        }}
        underlayColor="rgba(0,0,0,0.2)"
        onPress={() => { navigation.goBack() }} >
        <Icon
          name={'chevron-thin-left'}
          size={24}
          style={{
            color: '#fff',
            margin: 0,
            marginLeft: 0,
            padding: 0,
          }}
        />
      </TouchableHighlight>
    ),

    headerTitleStyle: {
      fontSize: 20,
      color: '#fff',
      marginLeft: 0,
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    //headerTitle: <Text>test</Text>
  });

  setTab = (tab) => {
    this.setState({ selectedTab: tab });

  }

  render() {
    //console.log('map', this.props.items);
    let items;
    switch (this.state.selectedTab) {
      case 0:
        items = this.props.rules.Gold;
        break;
      case 1:
        items = this.props.rules.Exp
        break;
      case 2:
        items = this.props.rules.Crystals;
        break;
    }
    let rulesView = <RulesView items={items} onPress={(type, item) => {
      // console.log(type);
      this.props.dispatch({
        type: type,
        payload: { index: this.state.selectedTab, item }
      })
    }} />
    return (
      <View style={styles.container} >
        <MaterialTabs
          items={['Gold', 'Exp', 'Crystal']}
          selectedIndex={this.state.selectedTab}
          onChange={this.setTab.bind(this)}
          barColor="#03A9F4"
          indicatorColor="#fffe94"
          activeTextColor="white"
        />
        <View style={{ flex: 1, }} >
          {rulesView}
        </View>

        <View style={styles.footer} >          
          <ButtonIcon
            raised
            size={25}
            name='md-add'
            type='ionicon'
            color='#ecf0f1'
            onPress={() => this.props.navigation.dispatch({
              type: 'ADD_RULES_VIEW',
              payload: { index: this.state.selectedTab }
            })}
            iconStyle={
              {
                fontSize: 30,
                color: '#fff'
              }
            }
            containerStyle={
              {
                borderColor: 'grey',
                borderWidth: 0,
                backgroundColor: '#03A9F4',
                alignSelf: 'center'
              }
            }
          />
        </View>


      </View>
    );
  }
}

export default connect(mapStateToProps)(RulesPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    //justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonPanel: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: 'grey',
    margin: 0,
  },
  footer: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf:'flex-end'
  },
  buttonRes: {
    width: 85,
    height: 35,
    flex: 0,
    padding: 0,
    borderColor: 'grey',
    borderWidth: 1,
    //padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
    margin: 5,
  },
  buttonTextStyle: {
    color: 'grey',
  },
  buttonCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    margin: 0,
    padding: 0,
    borderColor: '#ecf0f1',
    borderWidth: 1,
    //padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    //backgroundColor: 'transparent',

  },
  buttonFooter: {
    width: 100,
    flex: 0,

    //padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 0,
  },
  header: {
    backgroundColor: '#03A9F4',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
});