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
          <Text style={styles.headerText} > Battle of Wizards Assistans </Text>
        </View>
        <View style={styles.item}>
          <Button
            buttonStyle={styles.buttonRes}
            textStyle={styles.buttonTextStyle}
            onPress={this.onBtnResClick.bind(this)}
            title='Обн'
            loading={this.props.status.inAction}
            disabled={this.props.status.inAction}
          />
        </View >
        {content}
        <View style={styles.footer} >
          <ButtonGroupTM
            btnSelectPageClick={this.props.selectPage.bind(this)}
            selectedIndex={this.props.status.selectedPage}
            buttons={['Клан', 'Статистика']} />
          </View>
      </View>
    );
  }
}

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
  item: {
    backgroundColor: 'lightgrey',
    alignItems: 'flex-end',
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

export default connect(mapStateToProps, mapDispatcherToProps)(ShellView);