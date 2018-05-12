import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    TextInput,
} from 'react-native';
import {Colors, FontSizes} from '@theme';
import Button from '@button'
import Text from '@text'

import { getDiscussionStarter } from "@api";
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export default Email =  (props) => {
    var name, email = ""
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
                        <TextInput 
                            style={styles.textInput}
                            onChangeText={(text) => name = text}
                            />
                    </View>
                    <View>
                        <Text center>Email</Text>
                        <TextInput 
                            style={styles.textInput}
                            onChangeText={(text) => email = text}
                            />
                    </View>
                    <View style={styles.buttons}>
                        <Button light onPress={()=>props.onCancel()}>CANCEL</Button>
                        <Button dark onPress={()=>props.onSend(name, email)}>SEND</Button>
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
        width: responsiveWidth(50),
        padding: responsiveWidth(2),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,

    },

    title: {
        marginBottom: responsiveWidth(1.2),
    },

    textInput: {
        height: responsiveHeight(4.4),
        backgroundColor: Colors.backgroundSecondary,
        marginVertical: responsiveWidth(1.2),
        fontSize: FontSizes.smallMedium,
        color: Colors.textPrimary
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})