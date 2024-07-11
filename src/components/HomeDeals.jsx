import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import DealTimer from './DealTimer';

const HomeDeals = ({toggleButton}) => {
  return (
    <>
      {/* Deals of the day */}
      <View
        style={
          {
            // paddingHorizontal: 10,
          }
        }>
        <View
          style={{
            marginHorizontal: 12,
            paddingVertical: 10,
            marginVertical: 10,
            color: '#000000',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
                fontWeight: '300',
                marginTop: 25,
                marginBottom: 20,
                color: '#000',
              }}>
              Deals Of The Day
            </Text>
            <DealTimer />
          </View>
          <View style={styles.line} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 30,
          marginHorizontal: 8,
        }}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/7d/06/91/7d0691f7cc4f4b306fa31104090b2bc5.jpg',
            }}
            style={styles.categoryImages}
          />
          {!toggleButton && (
            <View style={styles.bannerContainer}>
              <Text style={styles.bannerText}>Trial</Text>
            </View>
          )}

          <View style={styles.textContainer}>
            <Text style={styles.itemText}>Fragrance & Beyond</Text>
            {/* <Text
              style={{
                fontFamily: "Montserrat-Regular",
                borderWidth: 1,
                borderColor: "#43454b",
                width: "70%",
                paddingHorizontal: 3,
                borderRadius: 3,
                fontWeight: "600",
                fontSize: 12,
                color:'#000'
              }}
            >
              $4.99 CASHBACK
            </Text> */}

            {toggleButton ? (
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  borderWidth: 1,
                  borderColor: '#43454b',
                  width: '70%',
                  paddingHorizontal: 3,
                  borderRadius: 3,
                  fontWeight: '600',
                  fontSize: 12,
                  color: '#000',
                }}>
                $4.99 CASHBACK
              </Text>
            ) : (
              <Text></Text>
            )}
            <Text
              style={{
                color: '#43454b',
                fontWeight: 500,
                fontSize: 16,
                marginVertical: 6,
              }}>
              Points : 5
            </Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/21/44/ac/2144ac77377d63ce5962fdd1b511a56f.jpg',
            }}
            style={styles.categoryImages}
          />
          {!toggleButton && (
            <View style={styles.bannerContainer}>
              <Text style={styles.bannerText}>Trial</Text>
            </View>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>Fragrance & Beyond</Text>
            {toggleButton ? (
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  borderWidth: 1,
                  borderColor: '#43454b',
                  width: '70%',
                  paddingHorizontal: 3,
                  borderRadius: 3,
                  fontWeight: '600',
                  fontSize: 12,
                  color: '#000',
                }}>
                $4.99 CASHBACK
              </Text>
            ) : (
              <Text></Text>
            )}
            <Text
              style={{
                color: '#43454b',
                fontWeight: 500,
                fontSize: 16,
                marginTop: 6,
              }}>
              Points : 2
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default HomeDeals;

const styles = StyleSheet.create({
  categoryContainer: {},
  itemContainer: {},
  categoryImages: {
    height: 180,
    width: 180,
  },
  textContainer: {},
  itemText: {
    color: '#007FFF',
    marginVertical: 10,
  },
  bannerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#92be2b',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  bannerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    marginVertical: 10,
  },
});
