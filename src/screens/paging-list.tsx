import React from 'react';
import { FlashList } from "@shopify/flash-list";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet, SafeAreaView, Text, View, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './root-stack-params';
import UsePosts from '../services/list-post-service';

type listScreenProp = StackNavigationProp<RootStackParamsList, 'PagingList'>;
const queryClient = new QueryClient();

export default function PagingList() {
    return <QueryClientProvider client={queryClient}>
    <SafeAreaView>
        <View style={styles.containerPaging}>
            <FlashList 
                data={[{name: 'tom'}, {name: 'jerry'}]} 
                renderItem={({item}) => <ItemPost />}
                estimatedItemSize={100}
                />
        </View>
    </SafeAreaView>
    </QueryClientProvider>
}

function ItemPost(): JSX.Element {
    return <Text style={styles.label}>Paging List</Text>;
}

const styles = StyleSheet.create({
    containerPaging: {
        width: Dimensions.get('screen').width,
        height: 300,
        backgroundColor: 'yellow',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})