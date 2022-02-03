import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab, Icon} from '@ui-kitten/components';
import {ParamListBase, TabNavigationState} from "@react-navigation/native";


const {Navigator, Screen} = createBottomTabNavigator();

const HomeIcon = (props: any) => (
    <Icon {...props} name='home'/>
);

const SearchIcon = (props: any) => (
    <Icon {...props} name='search-outline'/>
);

const RadarIcon = (props: any) => (
    <Icon {...props} name='navigation-2-outline'/>
);

const LikedIcon = (props: any) => (
    <Icon {...props} name='heart-outline'/>
);

const AccountIcon = (props: any) => (
    <Icon {...props} name='person-outline'/>
);

interface Props {
    navigation: any;
    state: TabNavigationState<ParamListBase>;
}

const BottomTabBar = ({ navigation, state } : any) => (
    <BottomNavigation
        style={{
            marginBottom: 25,
        }}
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab icon={HomeIcon} title='HOME'/>
        <BottomNavigationTab icon={SearchIcon} title='SEARCH'/>
        <BottomNavigationTab icon={RadarIcon} title='RADAR'/>
        <BottomNavigationTab icon={LikedIcon} title='LIKED'/>
        <BottomNavigationTab icon={AccountIcon} title='ACCOUNT'/>
    </BottomNavigation>
);

export default BottomTabBar;