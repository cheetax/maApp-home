import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import {
    Text,
    StyleSheet,
} from 'react-native';

import {
    ButtonGroup,
} from 'react-native-elements';

export default class ButtonClanStatistic extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
        this.props.btnSelectPageClick(selectedIndex);
    }

    render() {
        const buttons = ['Клан', 'Статистика']
        const { selectedIndex } = this.state

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.button}
                selectedBackgroundColor='grey'
                selectedTextStyle={styles.selectedText}
            />
        )
    }
}

const styles = StyleSheet.create({
    button: {
        //width: 100,
        flex: 0,
        alignItems: 'center',
        //alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 0,
    },
    selectedText: {
        color: '#fff',
    }
})