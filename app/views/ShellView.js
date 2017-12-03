import React, { Component } from 'react';
import { connect } from "react-redux";
import { setYearUpAction, setYearDownAction, getContent } from "../actions/actionYear";
import { Header } from 'react-native-elements';

import {
  Button,
  Card
} from 'react-native-elements';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainView from './MainView';
import ItemsListView from './itemsListViews';


function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  return {
    items: state.userInfo
  }
}

function mapDispatcherToProps(dispatcher) {
  return {
    setYearUpFunction: (object) => {
      dispatcher(setYearUpAction(object));
    },
    setYearDownFunction: (object) => {
      dispatcher(setYearDownAction(object));
    },
    getContent: () => {
      dispatcher(getContent());
    }
  }
}

class ShellView extends Component {

  onBtnResClick() {
    //console.log("OnBtnUpClick", id);
    return this.props.getContent()

  }

  render() {
    //console.log('map', this.props.items);
    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.headerText} > MyApp </Text>
        </View>
        <View style={styles.item}>
          <Button buttonStyle={styles.buttonRes} onPress={this.onBtnResClick.bind(this)} title='Res' />
          {/* <ItemsListView items={this.props.items} setYearUp={this.props.setYearUpFunction} setYearDown={this.props.setYearDownFunction} /> */}
          {            
            this.props.items.map((item, index) => {
              //console.log('item', item);
              return (
                //<Text key={index}> {item.user} </Text>
                <MainView key={index} keyVal={index} item={item} setYearUp={this.props.setYearUpFunction} setYearDown={this.props.setYearDownFunction} />
              );
            })
          }
          {/* <MainView object={this.props.object[0]} setYearUp={this.props.setYearUpFunction} setYearDown={this.props.setYearDownFunction} />
          <MainView object={this.props.object[1]} setYearUp={this.props.setYearUpFunction} setYearDown={this.props.setYearDownFunction} /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
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

export default connect(mapStateToProps, mapDispatcherToProps)(ShellView);