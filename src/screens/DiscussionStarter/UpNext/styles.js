import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, FontSizes, MediaQueries} from '@theme';

const { width } = Dimensions.get('window');

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";

export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
    },

    contentView: {
        paddingHorizontal: responsiveWidth(8),
        paddingVertical: responsiveWidth(2),
        flex: 1,
    },

    currentWrapper: {
        marginVertical: responsiveHeight(2), 
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.4,
        shadowRadius: 0,
    },

    current: {
        borderRadius: responsiveWidth(1.2),
        overflow: 'hidden'
    },

    next: {
        backgroundColor: '#fff',
        marginVertical: responsiveHeight(2), 
        paddingVertical: responsiveHeight(2), 
        borderRadius: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.4,
        shadowRadius: 0,
    },

    currentHeader: {
        padding: responsiveWidth(1),
        flexDirection: 'row',
        backgroundColor: Colors.Navy,
        alignItems: 'center',
        justifyContent: 'space-between',        
    },

    complete_text: {
        fontSize: responsiveHeight(3)
    },

    currentDescView: {
        backgroundColor: '#fff',
        padding: responsiveWidth(2),
        alignItems: 'center',
    },

    currentTitle: {
        marginVertical: 8,
    },

    currentPrecomment: {
    },

    nextTitle: {
        padding: responsiveWidth(2),
        flexDirection: 'row',
        justifyContent: 'center',
    },

    nextPrecomment: {
        borderWidth: 1,
        borderColor: Colors.backgroundSecondary,
    },

    later: {
        marginVertical: responsiveWidth(4),
    },

    later_text: {
        marginBottom: responsiveWidth(2),
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(9),
    },
    
    checkIcon: {
        width: responsiveHeight(4),
        height: responsiveHeight(4),
        marginRight: 8,
        tintColor: '#fff',
    }

}, {
    [MediaQueries.iPhone] : {
        contentView: {
            paddingHorizontal: responsiveWidth(2.8),
            paddingVertical: responsiveWidth(2.8),
        },
        buttonBar: {
            paddingHorizontal: responsiveWidth(2.8),
        },
        currentWrapper: {
            marginVertical: 0,
        }
    }
});
