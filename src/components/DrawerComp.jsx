import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import FAQ from '../pages/FAQ';
import ContactUs from '../pages/ContactUs';


const DrawerComp = () => {

  const navigation =useNavigation();
  const data = [
    {key: 'Skincare',screen:"FAQs"},
    {key: 'Makeup',screen:"FAQs"},
    {key: 'Haircare',screen:"FAQs"},
    {key: 'Fragrance',screen:"FAQs"},
    {key: 'FAQs',screen:"FAQs"},
    {key: 'Contact Us',screen:'ContactUs'},
    {key: 'etc...',screen:"FAQs"},
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate(item.screen)}>
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
