import React, {Component} from 'react';
import {Button, Icon, Layout, Text} from "@ui-kitten/components";

const HomeScreen = () => {

    const HeartIcon = (props: any) => (
        <Icon {...props} name='heart'/>
    );

    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text category='h1'>LOGIN SCREEN</Text>
            <Button
                style={{margin: 2}}
                accessoryLeft={HeartIcon}
            >
                PRESS ME
            </Button>
        </Layout>
    )
}

export default HomeScreen;
