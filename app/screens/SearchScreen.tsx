import React, {Component} from 'react';
import {Layout, Text} from "@ui-kitten/components";
import {SearchInput} from "../components/forms/SearchInput";
import {SafeScreen} from "../components/SafeScreen";

const SearchScreen = () => {

    return (
        <SafeScreen>
            <Layout style={{
                marginHorizontal: 16,
            }}>
                <SearchInput/>
            </Layout>
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h1'>SEARCH SCREEN</Text>
            </Layout>
        </SafeScreen>
    )
}

export default SearchScreen;
