import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import BottomTabBar from "./BottomTabBar";
import SearchScreen from "../screens/SearchScreen";
import RadarScreen from "../screens/RadarScreen";
import LikedScreen from "../screens/LikedScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen
      options={{
        headerShown: false,
      }}
      name="HOME"
      component={HomeScreen}
    />
    <Screen
      options={{
        headerShown: false,
      }}
      name="SEARCH"
      component={SearchScreen}
    />
    <Screen name="RADAR" component={RadarScreen} />
    <Screen name="LIKED" component={LikedScreen} />
    <Screen name="ACCOUNT" component={AccountScreen} />
  </Navigator>
);

export default TabNavigator;
