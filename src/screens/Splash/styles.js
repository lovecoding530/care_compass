const React = require("react-native");
const { Dimensions, Platform, StyleSheet } = React;
const deviceHeight = Dimensions.get("window").height;
export default {
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
    },
};