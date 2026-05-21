import React from "react";
import { FlashList } from "@shopify/flash-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import UsePosts from "../services/list-post-service";
import ItemPostGrid from "./item-post-grid";
import ItemLoadMore from "./item-load-more";
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function PagingGrid() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView
        style={styles.container}
        edges={["bottom", "left", "right"]}
      >
        <Content />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

function Content() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    UsePosts();

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
        numColumns={2}
        data={flattenData}
        renderItem={({ item }) => <ItemPostGrid post={item} />}
        onEndReachedThreshold={0.3}
        onEndReached={loadNext}
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
  label: {
    fontWeight: "bold",
    fontSize: 24,
  },
  containerPaging: {
    flex: 1,
  },
});
