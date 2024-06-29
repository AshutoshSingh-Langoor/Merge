import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerComp = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.replace('LoginScreen');
    } catch (error) {
      Alert.alert('Logout Error', 'Something went wrong');
    }
  };

  const data = [
    { key: 'Skincare', screen: 'FAQs' },
    { key: 'Makeup', screen: 'FAQs' },
    { key: 'Haircare', screen: 'FAQs' },
    { key: 'Fragrance', screen: 'FAQs' },
    { key: 'FAQs', screen: 'FAQs' },
    { key: 'Contact Us', screen: 'ContactUs' },
    { key: 'Logout', screen: 'LoginScreen', action: handleLogout },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => item.action ? item.action() : navigation.navigate(item.screen)}
    >
      <Text style={styles.itemText}>{item.key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default DrawerComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 14,
    fontFamily: 'Fidena',
    color: 'black',
    fontWeight: '200',
    letterSpacing: 0.6,
  },
});
