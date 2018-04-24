import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TextInput,
} from 'react-native';
import {Colors} from '@theme';
import Button from '@button'
import Text from '@text'

import { getDiscussionStarter } from "@api";

export default Email =  (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text medium center style={styles.title}>Email the results</Text>
                    <View>
                        <Text center>Name</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View>
                        <Text center>Email</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={styles.buttons}>
                        <Button light onPress={()=>props.onCancel()}>CANCEL</Button>
                        <Button dark>SEND</Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundModal,
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal: {
        backgroundColor: Colors.backgroundPrimary,
        width: 300,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,

    },

    title: {
        marginBottom: 10,
    },

    textInput: {
        height: 44,
        backgroundColor: Colors.backgroundSecondary,
        marginVertical: 10,
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})