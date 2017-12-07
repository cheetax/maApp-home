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

import MainView from './MainView';
import ItemsListView from './itemsListViews';


function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  return {
    items: ds.cloneWithRows(state.clanInfo.users),
  }
}

function mapDispatcherToProps(dispatch) {
  return {

  }
}

class ClanView extends Component {

  _keyExtractor = (item, index) => item.index;

  _renderRow (item) {
    return <MainView key={item} keyVal={item} item={item} />
  }

  render() {
    //console.log('map', this.props.items);

    return (
      <View style={styles.container}>

        {/* <List >
          {            
            this.props.items.map((item, index) => (
              <ListItem key={index} 
                        title ={item.name} />
                //<Text key={index}> {item.user} </Text>
                //<MainView key={index} keyVal={index} item={item} />
              ))           
          }
          </List> */}

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

export default connect(mapStateToProps, mapDispatcherToProps)(ClanView);