import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries} from '@theme';

const { width } = Dimensions.get('window');
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";


export default MediaQueryStyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: responsiveWidth(8.8),
    },

    introContainer: {
    },

    title: {
        margin: 8,
    },

    subtitle: {
        margin: 8,
    },

    flatList: {
        // alignItems: 'center',
    },

    item: {
        flex: 1,
        height: width/3,
        borderTopColor: Colors.Navy,
        borderTopWidth: responsiveWidth(1.2),
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: responsiveWidth(1),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1), height: responsiveWidth(1) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        margin: responsiveWidth(1.2), 
        paddingVertical: responsiveWidth(4),     
        justifyContent: 'space-between',
        alignItems: 'center',
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
        padding: 8,
        margin: responsiveWidth(1.2), 
        marginBottom: responsiveWidth(4),
    },

    item_number_view: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        backgroundColor: Colors.Navy,
        justifyContent: 'center',
        borderRadius: responsiveWidth(3),
    },
    item_number: {

    }, 
    item_text: {
        color: Colors.Navy,
    },
    item_start_text: {
        color: Colors.Red,
    }
}, {
    [MediaQueries.iPhone] : {
        container: {
            padding: responsiveWidth(2.8),
        },
        buttonBar: {
            paddingHorizontal: responsiveWidth(4),            
        },
        item: {
            flexDirection: 'row',
            height: null,
            padding: responsiveWidth(2),
            marginVertical: responsiveWidth(2),
        },
        item_text: {
            flex: 1,
            marginLeft: responsiveWidth(2),
            textAlign: 'left',
        }
    }
});
