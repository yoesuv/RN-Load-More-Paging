import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './root-stack-params';

type gridScreenProp = StackNavigationProp<RootStackParamsList, 'PagingGrid'>;

export default function PagingGrid() {
    return <SafeAreaView>
        <Text style={styles.label}>Paging Grid</Text>
    </SafeAreaView>
}

function Loading(): JSX.Element {
    return <View style={styles.containerCenter}>
        <ActivityIndicator size={'large'} />
    </View>
}

const styles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})