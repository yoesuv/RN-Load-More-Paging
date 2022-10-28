import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SizedBox from '../components/sized-box';
import { PostModel } from '../models/post-model';

type PostParams = {
    post: PostModel,
}

const ItemPostGrid = ({ post } : PostParams) => {
    return <View style={styles.containerItem}>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode={'tail'}>{ post.title }</Text> 
        <SizedBox height={6} />
        <Text style={styles.paragraph} numberOfLines={3} ellipsizeMode={'tail'}>{ post.body }</Text>
        <SizedBox height={6} />
    </View>
}

const styles = StyleSheet.create({
    containerItem: {
        paddingStart: 12,
        paddingEnd: 12,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    paragraph: {
        fontSize: 14,
    }
});

export default ItemPostGrid;