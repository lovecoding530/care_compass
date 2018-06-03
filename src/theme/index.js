/**
 * @providesModule @theme
 */

import Colors from './colors';
import Images from './images';
import { Dimensions } from "react-native";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { deviceWidth, deviceHeight } from "../components/ResponsiveDimensions";

console.log(Dimensions.get('window'))

const FontSizes = {
    small: deviceHeight(1.4), //14
    smallMedium: deviceHeight(1.8), //18
    medium: deviceHeight(2.4), //24
    mediumLarge: deviceHeight(3.6), //36
    large: deviceHeight(4.8),//48
};

const MediaQueries = {
    iPad: "@media (min-device-width: 768)",
    iPhone: "@media (max-device-width: 767)"
}

export { Colors, Images, FontSizes, MediaQueries };