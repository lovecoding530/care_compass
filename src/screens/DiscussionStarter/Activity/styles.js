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

    pregressBar: {
        marginHorizontal: responsiveWidth(13),
        marginVertical: responsiveWidth(2),
    },

    title: {
        margin: responsiveWidth(1),
        flexDirection: 'row',
        justifyContent: 'center'
    },

    icon: {
        height: 200,
    },

    questionItem: {
        marginTop: responsiveWidth(2),
        marginBottom: responsiveWidth(2),
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        padding: responsiveWidth(1.2),
    },

    questionTitle: {
        marginBottom: responsiveWidth(1.8),
        marginHorizontal: responsiveWidth(2),
    },

    textArea: {
        backgroundColor: Colors.backgroundSecondary,
        height: responsiveWidth(16),
        color: Colors.textPrimary,
        fontSize: FontSizes.smallMedium,
        padding: 8,
    },
    
    contentView: {
        flex: 1,
        paddingTop: responsiveWidth(4),
        paddingHorizontal: responsiveWidth(8),
        paddingBottom: 0,
    },

    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(8),
    },

    titleView: {
        borderTopColor: Colors.Red,
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(1.2),
        borderTopWidth: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.4,
        shadowRadius: 0,
        padding: 8,
        marginBottom: responsiveWidth(4),
        marginHorizontal: responsiveWidth(1.2)
    },

    scrollView: {
        paddingHorizontal: responsiveWidth(1.2),
    }
}, {
    [MediaQueries.iPhone] : {
        contentView: {
            paddingHorizontal: responsiveWidth(2.8),
        },
        buttonBar: {
            paddingHorizontal: responsiveWidth(2.8),
        },
    }
});
