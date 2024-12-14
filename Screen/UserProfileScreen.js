

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';

export default function UserProfileScreen({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleBackPress} style={styles.backButton}>
        <Image
          source={require('../assests/LeftArrowIcon.png')} 
          style={styles.arrow}
        />
      </Pressable>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>User Profile</Text>
        <Text style={styles.text}>Name: John Doe</Text>
        <Text style={styles.text}>Completed Deliveries: 5</Text>
        <Text style={styles.text}>Earned Reward Points: 250</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  arrow: {
    width: 30,
    height: 30,
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

