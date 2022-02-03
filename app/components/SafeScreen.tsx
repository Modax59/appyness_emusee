import React from "react";
import Constants from "expo-constants";
import {SafeAreaView, StyleSheet, View} from "react-native";

interface Props {
    children: React.ReactNode;
    style?: any;
}

export const SafeScreen = ({children, style}: Props) => {
    return <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
    },
    view: {
        flex: 1
    }
});