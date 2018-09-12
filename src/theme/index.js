/**
 * @providesModule @theme
 */

import Colors from './colors';
import Images from './images';
import { Dimensions, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { deviceWidth, deviceHeight } from '../components/ResponsiveDimensions';

console.log(Dimensions.get('window'));

const FontSizes = {
	small: deviceHeight(1.4), //14
	smallMedium: deviceHeight(1.8), //18
	medium: deviceHeight(2.4), //24
	mediumLarge: deviceHeight(3.6), //36
	large: deviceHeight(4.8) //48
};

const Metrics = {
	shadowOffset: deviceWidth(0.8)
};

const MediaQueries = {
	iPad: '@media (min-device-width: 768)',
	iPhone: '@media (max-device-width: 767)'
};

const htmlStyles = {
	p: {
		color: Colors.textPrimary,
		fontSize: FontSizes.smallMedium
	},
	a: {
		fontSize: FontSizes.smallMedium
	},
	ul: {
		color: Colors.textPrimary,
		fontSize: FontSizes.smallMedium
	},
	ol: {
		color: Colors.textPrimary,
		fontSize: FontSizes.smallMedium
	},
	strong: {
		fontWeight: '800'
	},
	b: {
		fontWeight: '800'
	},
	em: {
		fontStyle: 'italic'
	},
	i: {
		fontStyle: 'italic'
	}
};

export { Colors, Images, FontSizes, MediaQueries, Metrics, htmlStyles };
