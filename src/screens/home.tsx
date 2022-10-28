import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import AppButton from '../components/button';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from './root-stack-params';
import SizedBox from '../components/sized-box';

type homeScreenProp = StackNavigationProp<RootStackParamsList, 'Home'>;

export default function Home() {
    const navigation = useNavigation<homeScreenProp>();
    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.button} >
                <AppButton title="Pagination List" onPress={() => {
                    navigation.navigate('PagingList');
                }} />
            </View>
            <SizedBox height={14} />
            <View style={styles.button} >
                <AppButton title="Pagination Grid" onPress={() => {
                    navigation.navigate('PagingGrid');
                }} />
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 24,
        width: "100%",
    },
    button: {
        height: 50,
    }
  });