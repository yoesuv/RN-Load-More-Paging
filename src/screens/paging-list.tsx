import React from "react";
import { FlashList } from "@shopify/flash-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "./root-stack-params";
import UsePosts from "../services/list-post-service";
import ItemPostList from "./item-post-list";
import ItemLoadMore from "./item-load-more";
import { SafeAreaView } from "react-native-safe-area-context";

type listScreenProp = StackNavigationProp<RootStackParamsList, "PagingList">;
const queryClient = new QueryClient();

export default function PagingList() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Content />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

function Content() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = UsePosts();

  const flattenData = data?.pages.flatMap((page) => page.data);

  const loadNext = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (status === "pending") {
    return <Loading />;
  }

  return (
    <View style={styles.containerPaging}>
      <FlashList
        data={flattenData}
        renderItem={({ item }) => <ItemPostList post={item} />}
        onEndReached={loadNext}
        onEndReachedThreshold={0.3}
        ListFooterComponent={isFetchingNextPage ? <ItemLoadMore /> : null}
      />
    </View>
  );
}

function Loading() {
  return (
    <View style={styles.containerCenter}>
      <ActivityIndicator size={"large"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  containerPaging: {
    flex: 1,
  },
});
