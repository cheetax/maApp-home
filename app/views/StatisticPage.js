import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import MaterialTabs from 'react-native-material-tabs';
import StatisticView from './StatisticView';

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
  TouchableHighlight,
} from 'react-native';


function mapStateToProps(state) {
  return {
    status: state.actionStatus,
    nav: state.nav,
  }
}

class StatisticPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inAction: false,
      //selectedTab: 0,
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let headerLeft = (
      <TouchableHighlight
        style={{
          margin: 0,
          marginLeft: 8,
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        underlayColor="rgba(0,0,0,0.2)"
        onPress={() => navigation.navigate('DrawerOpen')}
      >
        <Icon
          name={'menu'}
          size={24}
          style={{ color: '#fff', marginLeft: 0 }}
        />
      </TouchableHighlight>

    );
    let headerRight = (
      <TouchableHighlight
        style={{
          margin: 0,
          marginRight: 8,
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        underlayColor="rgba(0,0,0,0.2)"
        onPress={params.btnRes ? params.btnRes : () => null}
      >
        <Icon
          name={'cw'}
          size={24}
          style={{ color: '#fff', marginRight: 0 }}
        />
      </TouchableHighlight>
    );
    if (params.inAction) {
      headerRight = (<ActivityIndicator size={24} color='#fff' style={{ marginRight: 16 }} />)
    }
    return {
      headerTitle: 'Статистика',
      headerLeft,
      headerRight,
      headerTitleStyle: {
        marginHorizontal: 0,
      },
    };
  }

  onBtnResClick() {
    return this.props.dispatch(getContent(true));
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log();
    if (this.props.status.inAction !== this.state.inAction) {
      this.setState({
        inAction: this.props.status.inAction
      }, () => this.props.navigation.setParams({ inAction: this.state.inAction }));
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ btnRes: this.onBtnResClick.bind(this), inAction: this.state.inAction })
  }

  render() {
    let statisticView = <StatisticView />
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, }} >
          {statisticView}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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

export default connect(mapStateToProps)(StatisticPage);