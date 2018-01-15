import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveRules } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
//import { MKButton } from 'react-native-material-kit';

import {
  Button,
  Card,
  List,
  ListItem,
} from 'react-native-elements';

import { Icon as ButtonIcon } from 'react-native-elements';


import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

//import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';

import ItemRulesView from './ItemRulesView';

export default class RulesView extends Component {

  _renderRow({item}) {
    return <ItemRulesView key={item.uid} keyVal={item.uid} item={item} onPress={this.props.onPress} />
  }

  _keyExtractor = (item, index) => {
    item.uid = index;
  }
  
  render() {
    //console.log('map', this.props.items);

    return (
      <View >

        <FlatList
          data={this.props.items}
          keyExtractor={this._keyExtractor.bind(this)}
          renderItem={this._renderRow.bind(this)}
          ItemSeparatorComponent={()=> <View style={{height: 0.5, backgroundColor:'grey', marginHorizontal: 16}} />}
          style={{backgroundColor:'#fff', marginVertical:8 }}
        />

      </View>
    );
  }
}

//export default connect(mapStateToProps)(RulesExpView);

const styles = StyleSheet.create({
  container: {
    flex: -1,
    backgroundColor: '#ecf0f1',
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
    //height:40,    
    borderTopWidth: 0.5,
    borderColor: 'grey',
    backgroundColor: 'lightgrey',
    alignItems: 'center'
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