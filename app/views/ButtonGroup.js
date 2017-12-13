import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";

import {
    Text,
    StyleSheet,
} from 'react-native';

import {
    ButtonGroup,
} from 'react-native-elements';

export default class ButtonGroupTM extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: props.selectedIndex,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
        this.props.btnSelectPageClick(selectedIndex);
    }

    render() {
        const buttons = this.props.buttons;
        const { selectedIndex } = this.state;

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.button}
                selectedBackgroundColor='grey'
                selectedTextStyle={styles.selectedText}
                innerBorderStyle= {style.innerBorder}
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
    },
    
})

const style = {
    innerBorder: {
        color: '#fff',
        width: 10,
    },
}