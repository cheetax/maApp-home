import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import MaterialTabs from 'react-native-material-tabs';

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
  FlatList,
} from 'react-native';

import ItemStaticView from './ItemStaticView';

class StatisticViewItems extends Component {  
  
  _keyExtractor = (item, index) => item.uid = index;

  _renderRow(item) {
    return <ItemStaticView key={item.id} keyVal={item.id} item={item.item} />
  }
  
  render() {
    //console.log('map', this.props.items);

    return (
      <View style={styles.container}>        
        <FlatList
          data={this.props.items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderRow.bind(this)}
          //ItemSeparatorComponent={()=> <View style={{height: 0.5, backgroundColor:'grey', marginHorizontal: 16}} />}
          //style={{backgroundColor:'#fff', marginVertical:8 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default StatisticViewItems;