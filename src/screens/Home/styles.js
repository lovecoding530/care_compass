import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Colors, MediaQueries, FontSizes, Metrics } from '@theme';

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { deviceWidth, deviceHeight, windowHeight } from '@ResponsiveDimensions';

export default MediaQueryStyleSheet.create(
	{
		container: {
			flex: 1,
			backgroundColor: Colors.yellow,
			paddingHorizontal: deviceWidth(4),
		},

		scrollView: {
			flexGrow: 1,
			paddingVertical: deviceWidth(4),
		},

		discussion_starter: {
			backgroundColor: Colors.navy,
			height: deviceWidth(75),
		},

		discussion_starter_content: {
			flex: 1,
			padding: deviceWidth(4),
			alignItems: 'center',
			justifyContent: 'space-between',
		},

		ds_icon: {
			width: '80%',
			height: '80%',
			resizeMode: 'contain',
			tintColor: Colors.red,
		},

		bottom_container: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginTop: deviceWidth(2),
		},

		item: {
			backgroundColor: Colors.navy,
		},

		item_content: {
			flex: 1,
			paddingVertical: deviceWidth(4),
			alignItems: 'center',
			justifyContent: 'space-between',
		},

		bottom_icon: {
			width: '60%',
			height: '60%',
			resizeMode: 'contain',
			tintColor: Colors.red,
			marginVertical: deviceWidth(1)
		},

		reduce_opacity: {
			opacity: 0.3
		},

		coming_soon: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: [ { translateY: -5 }, { translateX: -64 } ],
			width: 140,
			height: 30,
			lineHeight: 30,
			backgroundColor: Colors.Red,
			color: Colors.white,
			fontSize: 16,
			fontWeight: 'bold',
			textAlign: 'center'
		}
	},
	{
		[MediaQueries.iPad]: {
			item: {
				width: '32%',
			},
		},
		[MediaQueries.iPhone]: {
			bottom_container: {
				flexDirection: 'column',
			},
	
			left_item_text: {
				fontSize: FontSizes.medium
			},

			item: {
				height: '31.5%',
			},

			item_content: {
				justifyContent: 'center',
			}
		}
	}
);
