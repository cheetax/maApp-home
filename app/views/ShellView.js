import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent, selectPage } from "../actions/actionUsers";
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
import ClanView from './ClanView';
import StatisticView from './StatisticView';
import ButtonGroupTM from './ButtonGroup';

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
    selectPage: (Page) => {
      dispatch(selectPage(Page));
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
    if (!this.props.status.selectedPage) {
      content = <ClanView />
    }
    else {
      content = <StatisticView />
    }

    return (
      <View style={styles.container}>
        <View style={styles.header} >
          <Text style={styles.headerText} > MyApp </Text>
        </View>
        <View style={styles.item}>
          <Button buttonStyle={styles.buttonRes} onPress={this.onBtnResClick.bind(this)} title='Res' loading={this.props.status.inAction} disabled={this.props.status.inAction} />          
         
        </View >
        {content}
        <View style={styles.footer} >
          <ButtonGroupTM
            btnSelectPageClick={this.props.selectPage.bind(this)}
            selectedIndex={this.props.status.selectedPage}
            buttons={['Клан', 'Статистика']} />
          {/* <Button buttonStyle={styles.buttonRes} onPress={this.onBtnResClick.bind(this)} title='Клан' loading={this.props.status.inAction} />          
          <Button buttonStyle={styles.buttonRes} onPress={this.onBtnResClick.bind(this)} title='Статистика' loading={this.props.status.inAction}/>             */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    backgroundColor:'#ecf0f1',
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
    //backgroundColor: '#ecf0f1',
    alignItems: 'center',
    margin: 0,
  },
  footer: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    //height:40,
    backgroundColor: '#ecf0f1',
    alignItems: 'stretch'
  },
  buttonRes: {
    width: 100,
    flex: 0,
    //padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'grey',
    margin: 5,
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default connect(mapStateToProps, mapDispatcherToProps)(ShellView);