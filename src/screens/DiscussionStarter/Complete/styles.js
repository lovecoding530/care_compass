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
        flex: 1, 
        paddingHorizontal: responsiveWidth(8),
    },
    
    titleView: {
        borderTopColor: Colors.Red,
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(1.2),
        borderTopWidth: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        paddingVertical: responsiveWidth(4),
        marginVertical: responsiveWidth(4),
        marginHorizontal: responsiveWidth(1)
    },

    flatList: {
        paddingHorizontal: responsiveWidth(1.2),
    },

    currentWrapper: {
        marginBottom: responsiveHeight(3), 
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.4,
        shadowRadius: 0,
    },

    current: {
        borderRadius: responsiveWidth(1.2),
        overflow: 'hidden'
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

    moreInfo: {
        width: 240,
        borderTopColor: Colors.Navy,
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(1.2),
        borderTopWidth: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        paddingVertical: responsiveWidth(1.5),
        marginVertical: responsiveWidth(4),
        marginHorizontal: responsiveWidth(1),
        alignSelf: 'center',
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
        },
        buttonBar: {
            paddingHorizontal: responsiveWidth(2.8),
        },
        currentWrapper: {
            marginVertical: 0,
        }
    }
});
