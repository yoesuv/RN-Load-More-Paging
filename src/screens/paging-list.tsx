import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './root-stack-params';

type listScreenProp = StackNavigationProp<RootStackParamsList, 'PagingList'>;
const queryClient = new QueryClient();

export default function PagingList() {
    return <QueryClientProvider client={queryClient}>
    <SafeAreaView>
        <Text style={styles.label}>Paging List</Text>
    </SafeAreaView>
    </QueryClientProvider>
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})