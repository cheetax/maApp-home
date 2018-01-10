import React, { Component } from 'react';
import { connect } from "react-redux";
import { getContent, selectPage } from "../actions/actionUsers";
import { Header } from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

function mapStateToProps(state) {
    return {
        status: state.actionStatus,
        data: state.clanInfo,
        nav: state.nav,
    }
}

class MenuDrawer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor='#03A9F4'
                    style={styles.elementMenuButton}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose');
                        this.props.dispatch(selectPage(0))
                    }
                    }>
                    <Text style={styles.elementMenuText} >Клан</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='#03A9F4'
                    style={styles.elementMenuButton}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose');
                        this.props.dispatch(selectPage(1))
                    }}>
                    <Text style={styles.elementMenuText} >Статистика</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='#03A9F4'
                    style={styles.elementMenuButton}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose');
                        this.props.navigation.dispatch({
                            type: 'NAV_RULES_PAGE',
                            //payload: ''
                        })
                    }}>
                    <Text style={styles.elementMenuText} >Нормы</Text>
                </TouchableHighlight>

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
    elementMenuText: {
        fontSize: 14,
        color: '#03A9F4',
        textAlign: 'left',
        alignItems: 'center',
        marginLeft: 72,
    },
    elementMenuButton: {
        height: 48,
        justifyContent: 'center',
        margin: 0,
    },    
});

