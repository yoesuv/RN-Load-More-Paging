import React from 'react';
import { FlashList } from "@shopify/flash-list";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet, SafeAreaView, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './root-stack-params';
import UsePosts from '../services/list-post-service';
import SizedBox from '../components/sized-box';
import { PostModel } from '../models/post-model';
import { GREY_300 } from '../data/colors';

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

    if (status === 'loading') {
        return <Loading />
    }

    return <View style={styles.containerPaging}>
        <FlashList 
            data={flattenData}
            renderItem={({item}) => <ItemPost {...item} />}
            estimatedItemSize={100}
            />
    </View>
}

function Loading(): JSX.Element {
    return <View style={styles.containerCenter}>
        <ActivityIndicator size={'large'} />
    </View>
}

function ItemPost(post: PostModel): JSX.Element {
    return <View style={styles.containerPost}>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode={'tail'}>{ post.title }</Text> 
        <SizedBox height={6} />
        <Text style={styles.paragraph} numberOfLines={3} ellipsizeMode={'tail'}>{ post.body }</Text> 
        <SizedBox height={6} />
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
    containerPaging: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('window').height,
    },
    containerPost: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderBottomColor: GREY_300,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    paragraph: {
        fontSize: 14,
    }
})