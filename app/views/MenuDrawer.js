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
            // <View style={{backgroundColor: '#ecf0f1'}} >
                
            // </View>
            <View style={styles.container}>
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
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginLeft: 16,
                        alignItems: 'center'

                    }} >
                    <Icon
                        name={'home'}
                        size={16}
                        style={{
                            color: '#03A9F4',
                            //backgroundColor: 'red',
                            width: 40,
                            margin: 0,
                            marginLeft: 0,
                            padding: 0,
                        }}
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
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginLeft: 16,
                        alignItems: 'center'

                    }} >
                    <Icon
                        name={'line-graph'}
                        size={16}
                        style={{
                            color: '#03A9F4',
                            //backgroundColor: 'red',
                            width: 40,
                            margin: 0,
                            marginLeft: 0,
                            padding: 0,
                        }}
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
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginLeft: 16,
                        alignItems: 'center'

                    }} >
                    <Icon
                        name={'graduation-cap'}
                        size={16}
                        style={{
                            color: '#03A9F4',
                            //backgroundColor: 'red',
                            width: 40,
                            margin: 0,
                            marginLeft: 0,
                            padding: 0,
                        }}
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
        marginTop: 56,
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
});

