import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Image
} from "react-native";

import {Colors, Images} from '@theme';
import Styles from './styles';
import { Loader, Button, ImageButton, Text, Card, } from '@components';

export default class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
        };
    }
  
    componentWillMount() {
        // Add a listener for the delta value change
        this._val = { x:0, y:0 }
        // this.state.pan.addListener((value) => this._val = value);
        // Initialize PanResponder with move handling
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: (e, gestureState) => {
                // adjusting delta value
                this.state.pan.setValue({x: 0, y: 0});
            },
            onPanResponderMove: Animated.event([
                null, 
                { 
                    dx: this.state.pan.x, 
                    dy: this.state.pan.y 
                }
            ]),
            onPanResponderRelease: (e, {vx, vy}) => {
            },
        });
    }
  
    render() {
        let {item} = this.props;
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }

        return (
            <Animated.View 
                {...this.panResponder.panHandlers}
                style={[panStyle, Styles.cardItem]}
            >
                <Image source={Images.threeDots} style={Styles.dragIcon}/>
                <Text style={Styles.question}>{item.question}</Text>
                {(item.selectedLevel != 0) &&
                    <ImageButton source={Images.levelNot} style={Styles.itemLevelIcon} onPress={()=>this.props.onSelectedLevel(item.cardIndex0)}/>
                }
                {(item.selectedLevel != 1) &&
                    <ImageButton source={Images.levelSomewhat} style={Styles.itemLevelIcon} onPress={()=>this.props.onSelectedLevel(item.cardIndex,1)}/>
                }
                {(item.selectedLevel != 2) &&
                    <ImageButton source={Images.levelVery} style={Styles.itemLevelIcon} onPress={()=>this.props.onSelectedLevel(item.cardIndex,2)}/>
                }
            </Animated.View>

        );
    }
}
  