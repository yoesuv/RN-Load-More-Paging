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
    <SafeAreaView style={styles.container}>
        <Content />
    </SafeAreaView>
    </QueryClientProvider>
}

function Content(): JSX.Element {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = UsePosts();

    const flattenData = data?.pages.flatMap(page => page.data);

    return <View style={styles.containerPaging}>
        <FlashList 
            data={flattenData}
            renderItem={({item}) => <ItemPost />}
            estimatedItemSize={100}
            />
    </View>
}

function ItemPost(): JSX.Element {
    return <Text style={styles.label}>Paging List</Text>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerPaging: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('window').height,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})