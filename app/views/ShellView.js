import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';

import {
  Button,
  Card,
} from 'react-native-elements';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import MainView from './MainView';
import ClanView from './ClanView';
import ItemsListView from './itemsListViews';


function mapStateToProps(state) {
  //console.log('mapStateToProps', state);
  return {
    status: state.actionStatus,
    data: state.clanInfo,
  }
}

function mapDispatcherToProps(dispatch) {
  return {
    getContent: (forceUpdate) => {
      dispatch(getContent(forceUpdate));
    },
  }
}

class ShellView extends Component {

  onBtnResClick() {
    //console.log("OnBtnUpClick", id);
    //console.log(new Date());
    return this.props.getContent(true);
  }

  componentDidMount() {
    return this.props.getContent();
  }

  render() {
    //console.log('map', this.props.items);
    var content;
    if (true) {
      content = <ClanView />
    }
    else {
      content = <ClanView />
    }

    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.headerText} > MyApp </Text>
        </View>
        <View style={styles.item}>

          <Button buttonStyle={styles.buttonRes} onPress={this.onBtnResClick.bind(this)} title='Res' loading={this.props.status.inAction}/>          
         
        </View>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
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