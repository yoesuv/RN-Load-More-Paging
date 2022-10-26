import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './root-stack-params';

type listScreenProp = StackNavigationProp<RootStackParamsList, 'PagingList'>;

export default function PagingList() {
    return <SafeAreaView>
        <Text>Paging List</Text>
    </SafeAreaView>
}