import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const hairCareProducts = [
  {
    id: '1',
    title: 'Face Cream',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
      cashback: '$4.00 CASHBACK'
  },
  {
    id: '2',
    title: 'Swiss Beauty natural product',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/30/82/f7/3082f72dce7c49c33bc08c03d32675e4.jpg',
      cashback: '$4.00 CASHBACK'
  },
  {
    id: '3',
    title: 'Face Cream',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
      cashback: '$4.00 CASHBACK'
  },
  {
    id: '4',
    title: 'Face Mask',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$4.00 CASHBACK'
  },
  {
    id: '5',
    title: 'Face Cream',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$4.00 CASHBACK'
  },
  {
    id: '6',
    title: 'Face Mask',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$4.00 CASHBACK'
  },
  {
    id: '7',
    title: 'Face Cream',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$4.00 CASHBACK'
  },
  {
    id: '8',
    title: 'Face Mask',
    productPrice: '$ 300',
    imageUri:
      'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$4.00 CASHBACK'
  },
];

const HomeHairCareCategory = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  const renderItem = ({item}) => (
    <View>
      <Pressable
        style={[styles.itemContainer, {width: itemWidth}]}
        onPress={() => navigation.navigate('SingleCart', { item })}>

        {/* onPress={() => navigation.navigate('HairCareDetail', {item})}> */}
        <Image source={{uri: item.imageUri}} style={styles.categoryImages} />
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text
            style={{
              color: 'green',
              fontWeight: '500',
              fontSize: 16,
            }}>
            {item.productPrice}
          </Text>
        </View>
      </Pressable>
    </View>
  );
  return (
    <View>
      <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // paddingHorizontal: 15,
            backgroundColor: '#E7E7E7',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '300',
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
              padding: 10,
              color: '#000000',
            }}>
            Hair Care
          </Text>
        </View>
        <FlatList
          horizontal
          data={hairCareProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.categoryContainer}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={itemWidth * 2}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

export default HomeHairCareCategory;

const styles = StyleSheet.create({
  categoryContainer: {
    // paddingHorizontal: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  itemContainer: {
    alignItems: 'center',
    paddingTop: 5,
  },
  categoryImages: {
    height: 190,
    width: 190,
    // borderRadius: 4,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
  },
  itemText: {
    color: '#007FFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
