import React from 'react';
import { FlashList } from "@shopify/flash-list";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './root-stack-params';
import UsePosts from '../services/list-post-service';
import ItemPostGrid from './item-post-grid';

type gridScreenProp = StackNavigationProp<RootStackParamsList, 'PagingGrid'>;

const queryClient = new QueryClient();

export default function PagingGrid() {
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

    if (status === 'loading') {
        return <Loading />
    }

    return <View style={styles.containerPaging}>
        <FlashList 
            numColumns={2}
            data={flattenData}
            renderItem={({item}) => <ItemPostGrid post={item} /> }
            estimatedItemSize={100}
            onEndReachedThreshold={0.3}
        />
    </View>
}

function Loading(): JSX.Element {
    return <View style={styles.containerCenter}>
        <ActivityIndicator size={'large'} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    containerPaging: {
        flex: 1,
    },
})