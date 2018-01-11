import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent, selectPage } from "../actions/actionUsers";
import { Header } from 'react-native-elements';

import {
  Button,
  Card,
} from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";

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
  return {
    status: state.actionStatus,
    data: state.clanInfo,
    nav: state.nav,
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

class ShellPage extends Component {
  constructor(props) {
    super(props);
    this.state = { inAction: false };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerLeft = (<Icon
      name={'menu'}
      size={24}
      style={{ color: '#fff', marginLeft: 16 }}
      onPress={() => navigation.navigate('DrawerOpen')}
    />
    );
    let headerRight = (<Icon
      name={'cw'}
      size={24}
      style={{ color: '#fff', marginRight: 16 }}
      onPress={params.btnRes ? params.btnRes : () => null}
    />
    );
    if (params.inAction) {
      headerRight = (<ActivityIndicator size={24} color='#fff' style={{ marginRight: 16 }} />)
    }
    return {
      headerTitle: params.title,
      headerLeft,
      headerRight,
      headerTitleStyle: {
        marginHorizontal: 0,
      },
    };
  }

  onBtnResClick() {
    return this.props.getContent(true);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log();
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log();
    if (this.props.status.inAction !== this.state.inAction) {
      this.setState({
        inAction: this.props.status.inAction
      }, () => this.props.navigation.setParams({ inAction: this.state.inAction }));

    }
    // if (!this.props.status.selectedPage) {
    //   this.props.navigation.setParams({title: 'Battle of Wizards Assistans'})
    //   //this.navigationOptions({ headerTitle: 'Test' });
    // }
    // else {
    //   this.props.navigation.setParams({title: 'Статистика'})
    // }
  }
  componentDidMount() {
    this.props.navigation.setParams({ btnRes: this.onBtnResClick.bind(this), inAction: this.state.inAction })
    
  }

  render() {
    //console.log('map', this.props.items);
    var content;
    if (!this.props.status.selectedPage) {
      content = <ClanView />
      //this.props.navigation.setParams({title: 'Battle of Wizards Assistans'})
      //this.navigationOptions({ headerTitle: 'Test' });
    }
    else {
      content = <StatisticView />
      //this.props.navigation.setParams({title: 'Статистика'})
    }
    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(ShellPage);

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

