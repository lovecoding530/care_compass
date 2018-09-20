import React, { Component } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';

import { Colors, FontSizes, MediaQueries, Metrics } from '@theme';

const { width } = Dimensions.get('window');

import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { MediaQueryStyleSheet } from 'react-native-responsive';
import { deviceWidth, deviceHeight, windowHeight, windowWidth } from '@ResponsiveDimensions';

export default MediaQueryStyleSheet.create(
	{
		container: {
			flex: 1,
			backgroundColor: Colors.gray
		},

		pregressBar: {
			marginHorizontal: deviceWidth(13),
			marginVertical: deviceWidth(2)
		},

		title: {
			margin: deviceWidth(1),
			flexDirection: 'row',
			justifyContent: 'center',
			flexWrap: 'wrap'
		},

		icon: {
			height: 200
		},

		questionItem: {
			marginVertical: deviceWidth(1.5),
			backgroundColor: '#fff',
		},

		questionItemContent: {
			padding: 0,
		},

		itemBody: {
			borderColor: Colors.gray,
			borderTopWidth: 1,
			borderBottomWidth: 1,
			padding: deviceWidth(2),
		},

		questionTitle: {
			margin: deviceWidth(2),
			flexDirection: 'row',
			justifyContent: 'space-between'
		},

		questionContainer: {
			width: '80%',
			flexGrow: 1
		},

		textArea: {
			backgroundColor: Colors.backgroundSecondary,
			height: deviceWidth(24),
			color: Colors.textPrimary,
			fontSize: FontSizes.smallMedium,
			padding: deviceWidth(1.2),
			borderWidth: 1,
			borderColor: '#222222'
		},

		buttonBar: {
			backgroundColor: '#E6E0D4',
			margin: deviceWidth(3),
		},

		buttonBarContent: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			backgroundColor: '#E6E0D4',
		},

		titleView: {
			marginBottom: deviceWidth(2)
		},

		scrollView: {
			flexGrow: 1,
			padding: deviceWidth(3),
		},

		itemBottom: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: deviceWidth(2)
		},

		answerButtonWrapper: {
		},

		answerButton: {
			paddingVertical: 4,
			paddingHorizontal: 8,
			flexDirection: 'row',
			alignItems: 'center'
		},

		answerButtonOn: {
			backgroundColor: Colors.green,
			paddingVertical: 4,
			paddingHorizontal: 8,
			flexDirection: 'row',
			alignItems: 'center'
		},

		sound: {
			width: deviceHeight(2),
			height: deviceHeight(2),
			marginLeft: deviceWidth(3)
		}
	},
	{
		[MediaQueries.iPhone]: {
			itemBottom: {
				flexDirection: 'column'
			},
			answerButtonWrapper: {
				marginBottom: deviceWidth(2),
			}
		}
	}
);
