import React, { Component } from 'react';
import { Header } from 'react-native-elements';

import {
    Button,
    Card,
    List,
    ListItem,
} from 'react-native-elements';

import Icon from "react-native-vector-icons/Entypo";

import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight
} from 'react-native';

class MoreStatisticView extends Component {
    render() {
        return (
            <Modal presentationStyle='formSheet' visible={false} >
                <Text>test modal window</Text>
            </Modal>
        )
    }
}

export default MoreStatisticView;