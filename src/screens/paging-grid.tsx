import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './root-stack-params';

type gridScreenProp = StackNavigationProp<RootStackParamsList, 'PagingGrid'>;

export default function PagingGrid() {
    return <SafeAreaView>
        <Text style={styles.label}>Paging Grid</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})