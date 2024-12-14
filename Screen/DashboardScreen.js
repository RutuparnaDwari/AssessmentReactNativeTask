

import React from 'react';
import { View, FlatList, Text, Pressable, StyleSheet, Image } from 'react-native';

const deliveryRequests = [
    { id: '1', item: 'Groceries', location: 'Hilltop Village', reward: '50 Points' },
    { id: '2', item: 'Electronics', location: 'Riverbend Town', reward: '70 Points' },
    { id: '3', item: 'Books', location: 'Forest Cabin', reward: '30 Points' },
    { id: '4', item: 'Dresses', location: 'Hilltop Village', reward: '80 Points' },
    { id: '5', item: 'Cosmetics', location: 'Riverbend Town', reward: '60 Points' },
];

const Dashboard = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('RequestDetails', { request: item })}
        >
            <Text style={styles.item}>Item: {item.item}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Reward: {item.reward}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()} style={styles.iconContainer}>
                    <Image source={require('../assests/LeftArrowIcon.png')} style={styles.leftArrowIcon} />
                </Pressable>
                <Text style={styles.title}>Available Delivery</Text>
                <View style={{ width: 20 }} /> 
            </View>
            <FlatList
                data={deliveryRequests}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginBottom: 20,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    title: {
        flex:5,
        fontSize: 18,
        textAlign: 'center',
        color: '#235786',
        fontWeight:'bold'
    },
    leftArrowIcon: {
        width: 20,
        height: 20,
    },
    listContainer: {
        flexGrow: 1,
    },
    card: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
        elevation: 4,
        backgroundColor: '#fff',
        width: '100%',
    },
    item: {
        fontSize: 18,
    },
});

export default Dashboard;


