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
        account: state.account
    }
}

class MenuDrawer extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={{
                    flex: 0,
                    height: 56,
                    //backgroundColor: 'orange',
                    justifyContent: 'center'
                }} >
                    <View style={{
                        flex: 0,
                        flexDirection: 'row',
                        marginHorizontal: 16,
                        alignItems: 'center'
                    }} >
                        <View style={{
                            height: 32,
                            width: 32,
                            marginRight: 8,
                            borderRadius: 16,
                            backgroundColor: 'lightgrey',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} >
                            <Icon
                                name={'user'}
                                size={22}
                                style={{ justifyContent: 'center' }}
                            />
                        </View>
                        <TouchableHighlight
                            underlayColor='rgba(3, 169, 244, 0.4)'
                            style={styles.elementMenuButton}
                            onPress={() => {
                                this.props.navigation.navigate('DrawerClose');
                                this.props.navigation.dispatch({
                                    type: 'NAV_LOGIN_PAGE',
                                    //payload: ''
                                })
                                //this.props.dispatch(selectPage(1))
                            }}>
                            <Text style={styles.elementMenuText} >{this.props.account.login}</Text>
                        </TouchableHighlight>

                    </View>

                </View>
                <View style={{ height: 1, backgroundColor: 'lightgray' }} />
                <TouchableHighlight
                    underlayColor="rgba(3, 169, 244, 0.4)"
                    style={styles.elementMenuButton}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose');
                        this.props.navigation.dispatch({
                            type: 'NAV_CLAN_PAGE',
                            //payload: ''
                        })
                        //this.props.dispatch(selectPage(0))
                    }
                    }>
                    <View
                        style={styles.elementMenu} >
                        <Icon
                            name={'home'}
                            size={24}
                            style={styles.elementMenuIcon}
                        />
                        <Text style={styles.elementMenuText} >Клан</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='rgba(3, 169, 244, 0.4)'
                    style={styles.elementMenuButton}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose');
                        this.props.navigation.dispatch({
                            type: 'NAV_STATISTIC_PAGE',
                            //payload: ''
                        })
                        //this.props.dispatch(selectPage(1))
                    }}>
                    <View
                        style={styles.elementMenu} >
                        <Icon
                            name={'line-graph'}
                            size={24}
                            style={styles.elementMenuIcon}
                        />
                        <Text style={styles.elementMenuText} >Статистика</Text>
                    </View>

                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='rgba(3, 169, 244, 0.4)'
                    style={styles.elementMenuButton}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerClose');
                        this.props.navigation.dispatch({
                            type: 'NAV_RULES_PAGE',
                            //payload: ''
                        })
                    }}>
                    <View
                        style={styles.elementMenu} >
                        <Icon
                            name={'graduation-cap'}
                            size={24}
                            style={styles.elementMenuIcon}
                        />
                        <Text style={styles.elementMenuText} >Нормы</Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}

export default connect(mapStateToProps)(MenuDrawer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 0,
        backgroundColor: 'transparent'
    },
    elementMenuText: {
        fontSize: 14,
        color: '#03A9F4',
        textAlign: 'left',
        alignItems: 'center',
        marginLeft: 16,
    },
    elementMenuButton: {
        height: 48,
        justifyContent: 'center',
        margin: 0,
    },
    elementMenuIcon: {
        color: '#03A9F4',
        //backgroundColor: 'red',
        width: 36,
        margin: 0,
        marginLeft: 0,
        padding: 0,
    },

    elementMenu: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center'
    }
});

