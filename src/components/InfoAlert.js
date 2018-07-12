import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Image,
} from 'react-native';
import {Colors, Metrics} from '@theme';
import Button from '@button'
import Text from '@text'
import { deviceWidth } from "@ResponsiveDimensions";

export default InfoAlert =  (props) => {
    const {icon, message, onCancel} = props
    return (
        <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType="slide"
            transparent={true}
            visible={props.visible}
            >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Image source={icon} style={styles.icon}/>
                    <Text medium center color={Colors.Olive}>{message}</Text>
                    <Button light bold color={Colors.Navy} buttonStyles={styles.closeButton} onPress={()=>onCancel()}>Close</Button>
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
        borderRadius: deviceWidth(1.2),
        width: 300,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: Metrics.shadowOffset, height: Metrics.shadowOffset },
        shadowOpacity: 0.4,
        shadowRadius: 0,
    },

    title: {
        marginBottom: 10,
    },

    textInput: {
        height: 44,
        backgroundColor: Colors.backgroundSecondary,
        marginVertical: 10,
    },

    closeButton: {
        marginTop: 20,
        width: 100,
    },

    icon: {
        width: 64,
        height: 64,
        tintColor: Colors.Olive,
        marginVertical: 5,
    }
})