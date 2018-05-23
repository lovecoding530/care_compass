import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import {Colors, MediaQueries} from '@theme';

const deviceHeight = Dimensions.get("window").height;
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from "react-native-responsive";

export default MediaQueryStyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary,
        padding: 16,
        flexDirection: 'row'
    },

    containerRight: {
        flex: 3,
    },

    containerLeft: {
        flex: 5,
    },

    item: {
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: responsiveWidth(1.2),
        borderTopWidth: responsiveWidth(1.2),
        shadowColor: '#000',
        shadowOffset: { width: responsiveWidth(1.2), height: responsiveWidth(1.2) },
        shadowOpacity: 0.5,
        shadowRadius: 0,
        margin: 8,        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    right_item: {
        borderTopColor: Colors.Red,
    },
    
    left_item: {
        borderTopColor: Colors.Navy,
    },

    survey_item: {
        borderTopColor: Colors.Navy,
        flex: 0.4,
    },

    right_item_text: {
        color: Colors.Red,
    },
    
    left_item_text: {
        color: Colors.Navy,
    },
    
    right_icon: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain', 
        tintColor: Colors.Red,
        marginVertical: 20,
    },

    left_icon: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain', 
        tintColor: Colors.Navy,
        marginVertical: 20,
    }
}, {
    [MediaQueries.iPhone] : {
        container: {
            flexDirection: 'column',
        },
        survey_item: {
            flex: 1,
        },
        containerLeft: {
            flex: 3,
        },
        containerRight: {
            flex: 5,
        }
    }
});
