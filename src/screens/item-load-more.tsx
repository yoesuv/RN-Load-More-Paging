import { StyleSheet, ActivityIndicator, View } from "react-native";

const ItemLoadMore = () => {
    return <View style={styles.container}>
        <ActivityIndicator size={'large'} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
    }
});

export default ItemLoadMore;