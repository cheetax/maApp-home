import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent, selectPage } from "../actions/actionUsers";
import { Header } from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
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

class MenuDrawer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Menu',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Нормы'
                    onPress={() => this.props.navigation.dispatch({
                        type: 'NAV_RULES_PAGE',
                        //payload: ''
                    })}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps)(MenuDrawer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'flex-start',
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

