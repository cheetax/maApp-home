import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveRules } from "../actions/actionUsers";
import { Header } from 'react-native-elements';
import Icon from "react-native-vector-icons/Entypo";
import TextField from 'react-native-md-textinput';
import Menu, { MenuDivider, MenuItem, } from 'react-native-material-menu';
//import { MKButton } from 'react-native-material-kit';

import {
    Button,
    Card,
} from 'react-native-elements';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
} from 'react-native';

export class MenuContextShellPage extends Component {
    menu = null;
    setMenuRef = ref => {
        this.menu = ref;
    }
    
    render() {
        return (
            <Menu
                ref={this.setMenuRef}
                button={
                    <Icon
                        name={'dots-three-vertical'}
                        size={18}
                        onPress={() => this.menu.show()}
                        style={{marginLeft: 10 }} />}
            // style={{ backgroundColor: 'red' }}
            >
                <MenuItem onPress={() => {
                    this.menu.hide();
                    this.props.onPress('EDIT_RULES_VIEW', this.props.item);
                }} >edit</MenuItem>
                <MenuItem onPress={() => {
                    this.menu.hide();
                    this.props.onPress('DELETE_RULE', this.props.item);
                }}>delete</MenuItem>
            </Menu>
        );
    }
}
