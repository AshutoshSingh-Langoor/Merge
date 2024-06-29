import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Image source={{uri: item.imageUri}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    // borderRadius: 5,
  },
  title: {
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    fontWeight: '300',
    color: 'gray',
  },
  price: {
    paddingHorizontal: 10,

    fontSize: 20,
    fontWeight: '400',
    color: 'gray',
  },
});