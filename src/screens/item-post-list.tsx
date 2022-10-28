import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import SizedBox from '../components/sized-box';
import { GREY_300 } from '../data/colors';
import { PostModel } from '../models/post-model';

type PostParams = {
    post: PostModel,
}

const ItemPostList = ({ post } : PostParams) => {
    return <View style={styles.containerPost}>
    <Text style={styles.label} numberOfLines={2} ellipsizeMode={'tail'}>{ post.title }</Text> 
    <SizedBox height={6} />
    <Text style={styles.paragraph} numberOfLines={3} ellipsizeMode={'tail'}>{ post.body }</Text> 
    <SizedBox height={6} />
</View>
}

const styles = StyleSheet.create({
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
});

export default ItemPostList;