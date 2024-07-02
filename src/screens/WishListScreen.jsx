import {StyleSheet, Text, View, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const WishListScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={styles.iconContainer}>
        {/* <Pressable onPress={() => navigation.navigate(CartScreen)}>
          <SimpleLineIcons name="handbag" size={22} color="#3F6065" />
        </Pressable>
        <Pressable onPress={() => navigation.navigate(LoginScreen)}>
          <Ionicons name="person-outline" size={22} color="#3F6065" />
        </Pressable> */}
        {/* <Pressable onPress={() => navigation.openDrawer()}>
            <FontAwesome name="align-justify" size={18} color="#3F6065" />
          </Pressable> */}
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50%',
        }}>
        <Text
          style={{
            fontSize: 18,
            letterSpacing: 0.6,
            color: 'black',
            fontWeight: 700,
            fontFamily: 'Fidena',
            fontSize: 18,
            letterSpacing: 0.6,
          }}>
          Wishlist
        </Text>
      </View>
      <View>
        <Text
          style={{
            borderColor: '#E6E6E6',
            borderWidth: 1,
            height: 40,
            margin: 10,
            // width: 200,
            backgroundColor: '#E6E6E6',
            // justifyContent: 'center',
            // alignItems: 'center',
            paddingHorizontal: 20,
            padding: 10,
            fontFamily: 'Fidena',
            color: 'gray',
            fontSize: 12,
            letterSpacing: 0.6,
          }}>
          The wishlist is empty.
        </Text>
        <Pressable onPress={() => navigation.navigate('Shop')}>
          <View style={{paddingHorizontal: 20, marginTop: 15}}>
            <Text
              style={{
                backgroundColor: '#3F6065',
                width: 150,
                padding: 15,
                color: 'white',
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
                fontSize: 13,
              }}>
              Return to shop
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});
