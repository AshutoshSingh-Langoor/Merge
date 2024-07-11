// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   Dimensions,
//   Pressable,
//   Animated,
//   TouchableOpacity,
// } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { fetchAllProducts } from '../services/all_products';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useDispatch, useSelector } from 'react-redux';
// import { addtowishlist ,removefromwishlist } from '../Redux/Action';

// const HomeSkinCareCategory = () => {
//   const navigation = useNavigation();
//   const screenWidth = Dimensions.get('window').width;
//   const itemWidth = screenWidth / 2;

//   const wishlistData = useSelector((state) => state.reducerWishlist);
//   const [data,setData]=useState()
//   const dispatch = useDispatch();
//   const AllIds = wishlistData.map(product => product.id);

//   const animationValues = useRef({}).current;

//   useEffect(() => {
//     const getProductsData = async () => {
//       const ProductsData = await fetchAllProducts();
//       if(ProductsData){
//         const skincareProduct = ProductsData.filter(product =>
//           product.categories.includes("Skincare") || product.categories.includes("Skin Care")
//       );
//         // console.log('buekte7t',skincareProducts);
//         setData(skincareProduct)
//       }
//     };

//     getProductsData();
//   }, [wishlistData]);

//   const handleWishlistPress = (item) => {
//     if (!animationValues[item.id]) {
//       animationValues[item.id] = new Animated.Value(1);
//     }
//     const idExists = AllIds.includes(item.id);
//     if (idExists) {
//       dispatch(removefromwishlist(item));
//       console.warn(wishlistData);
//     } else {
//       dispatch(addtowishlist(item));
//       console.warn(wishlistData);
//     }
//     Animated.sequence([
//       Animated.timing(animationValues[item.id], {
//         toValue: 1.05,
//         duration: 200,
//         useNativeDriver: true,
//       }),
//       Animated.timing(animationValues[item.id], {
//         toValue: 1,
//         duration: 200,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const renderItem = ({ item }) => {

//     const idExists = AllIds.includes(item.id)
//     return(

//       <View style={[styles.itemContainer]}>
//       <Pressable onPress={() => navigation.navigate('SingleCart', { item })}>
//         <Image source={{ uri: item.image }} style={styles.categoryImages} />
//         <View style={styles.priceContainer}>
//             <TouchableOpacity  onPress={() => handleWishlistPress(item)}>
//               <Animated.View style={{ transform: [{ scale: animationValues[item.id] || 1 }] }}>
//                 <Icon
//                 style={{position:'absolute',right:7,top:8}}
//                   name={idExists ? 'heart' : 'heart-o'}
//                   size={25}
//                   color={idExists ? 'red' : 'gray'}
//                 />
//               </Animated.View>
//             </TouchableOpacity>
//           </View>
//         <View style={styles.textContainer}>
//           <Text style={styles.itemText}>{item.title}</Text>
//             <Text style={styles.priceText}>{item.price}</Text>
//         </View>
//       </Pressable>
//     </View>
//     )
//   }
//   return (
//     <View>
//       <View style={{ paddingHorizontal: 10, paddingBottom: 5 }}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Skin Care</Text>
//         </View>
//       </View>
//       <FlatList
//         horizontal
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.categoryContainer}
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         snapToInterval={itemWidth * 2}
//         decelerationRate="fast"
//       />
//     </View>
//   );
// };

// export default HomeSkinCareCategory;
// const screenWidth = Dimensions.get('window').width;
//   const itemWidth = screenWidth / 2.15;

// const styles = StyleSheet.create({

//    container: {
//     flex: 1,
//     backgroundColor: '#F8F8F8',
//     paddingHorizontal: 10,
//     paddingBottom: 5,
//   },
//   header: {
//     backgroundColor: 'black',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#fff',
//     textAlign:'center',
//     justifyContent:'center'

//   },
//   categoryContainer: {
//     paddingVertical: 10,
//   },
//   itemContainer: {
//     alignItems: 'center',
//     padding: 5,
//     marginHorizontal: 5,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//     width: itemWidth
//   },
//   categoryImages: {
//     height: 190,
//     width: itemWidth,
//     borderRadius: 10,
//   },
//   textContainer: {
//     width: '100%',
//     padding: 10,
//   },
//   itemText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 5,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     position:'relative'
//   },
//   priceText: {
//     color: 'green',
//     fontWeight: '500',
//     fontSize: 16,
//     paddingBottom:5

//       },

// });

// import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';

// const HomeSkinCareCategory = () => {
//   const navigation = useNavigation();
//   return (
//     <View>
//       <View style={{paddingHorizontal: 10, paddingBottom: 5}}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             // paddingHorizontal: 15,
//             backgroundColor: '#E7E7E7',
//           }}>
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: 'bold',
//               padding: 10,
//             }}>
//             Skin Care
//           </Text>
//           {/* <Pressable onPress={() => navigation.navigate('SkinCare')}>
//             <Text
//               style={{
//                 fontSize: 14,
//                 fontWeight: 'bold',
//                 padding: 10,
//               }}>
//               View All
//             </Text>
//           </Pressable> */}
//         </View>
//       </View>
//       <View style={styles.categoryContainer}>
//         <View style={styles.itemContainer}>
//           <Image
//             source={{
//               uri: 'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
//             }}
//             style={styles.categoryImages}
//           />
//           <View style={styles.textContainer}>
//             <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
//               $ 300
//             </Text>
//             <Text style={styles.itemText}>Face Cream</Text>
//           </View>
//         </View>
//         <View style={styles.itemContainer}>
//           <Image
//             source={{
//               uri: 'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
//             }}
//             style={styles.categoryImages}
//           />
//           <View style={styles.textContainer}>
//             <Text style={{color: 'green', fontWeight: 500, fontSize: 16}}>
//               $ 300
//             </Text>
//             <Text style={styles.itemText}>Face Mask</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HomeSkinCareCategory;

// const styles = StyleSheet.create({
//   categoryContainer: {
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   itemContainer: {
//     alignItems: 'center',
//   },
//   categoryImages: {
//     height: 190,
//     width: 190,
//     borderRadius: 4,
//   },
//   textContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemText: {
//     color: '#007FFF',
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {fetchAllProducts} from '../services/all_products';

import {addtowishlist, removefromwishlist} from '../Redux/Action';

const HomeSkinCareCategory = ({toggleButton}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const wishlistData = useSelector(state => state.reducerWishlist);
  const [data, setData] = useState();
  const flatListRef = useRef(null);
  const dispatch = useDispatch();
  const animationValues = useRef({}).current;

  const AllIds = wishlistData.map(product => product.id);

  const skinCareProducts = [
    {
      id: '1',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$4.00 CASHBACK',
      points: 1,
    },
    {
      id: '2',
      title: 'Swiss Beauty natural product',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$1.00 CASHBACK',
      points: 5,
    },
    {
      id: '3',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$1.50 CASHBACK',
      points: 4,
    },
    {
      id: '4',
      title: 'Face Mask',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$.05 CASHBACK',
      points: 2,
    },
    {
      id: '5',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$1.00 CASHBACK',
      points: 3,
    },
    {
      id: '6',
      title: 'Face Mask',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$4.00 CASHBACK',
      points: 1,
    },
    {
      id: '7',
      title: 'Face Cream',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
      cashback: '$4.00 CASHBACK',
      points: 5,
    },
    {
      id: '8',
      title: 'Face Mask',
      productPrice: '$ 300',
      imageUri:
        'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
      cashback: '$4.00 CASHBACK',
      points: 2,
    },
  ];

  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;

  useEffect(() => {
    const getProductsData = async () => {
      const ProductsData = await fetchAllProducts();
      try {
        if (ProductsData) {
          const skincareProduct = ProductsData.filter(
            product =>
              product.categories.includes('Skincare') ||
              product.categories.includes('Skin Care'),
          );
          // console.log('buekte7t',skincareProducts);
          setData(skincareProduct);
          console.warn(skincareProduct);
        }
      } catch (error) {
        console.error('Error fetching skin care products:', error);
      }
    };

    getProductsData();
  }, [wishlistData]);

  const handleWishlistPress = item => {
    console.log('handleWishlist', item);
    // console.log("dispacth",dispatch(wishlistData.length)||null)

    if (!animationValues[item.id]) {
      animationValues[item.id] = new Animated.Value(1);
    }
    const idExists = AllIds.includes(item.id);
    if (idExists) {
      dispatch(removefromwishlist(item));
      console.log(dispatch(wishlistData.length));
      console.warn(wishlistData);
    } else {
      dispatch(addtowishlist(item));
      console.warn(wishlistData);
    }
    Animated.sequence([
      Animated.timing(animationValues[item.id], {
        toValue: 1.05,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animationValues[item.id], {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderItem = ({item}) => {
    console.log('item is : ', item);

    const idExists = AllIds.includes(item.id);
    const lengthOfTitle = item.title.length > 20;
    return (
      <View style={{marginTop: 30}}>
        <Pressable
          style={[styles.itemContainer, {width: itemWidth}]}
          onPress={() => navigation.navigate('SingleCart', {item})}>
          {/* onPress={() => navigation.navigate('Detail', {item})}> */}
          <Image source={{uri: item.image}} style={styles.categoryImages} />
          {!toggleButton && (
            <View style={styles.bannerContainer}>
              <Text style={styles.bannerText}>Trial</Text>
            </View>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.itemText}>
              {lengthOfTitle ? item.title.slice(0, 20) : item.title}
            </Text>
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
                marginTop: 5,
              }}
            >
              $4.00 cashback
              {item.cashback}
            </Text> */}

            {toggleButton && (
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
                  marginTop: 5,
                }}>
                $4.00 cashback
                {item.cashback}
              </Text>
            )}

            {/* <View style={styles.priceContainer}>
              <Text
                style={{
                  color: "#43454b",
                  fontWeight: 500,
                  fontSize: 16,
                  marginTop: 6,
                  marginBottom: 10,
                }}
              >
                ${item.price}
              </Text> */}

            {toggleButton ? (
              <Text
                style={{
                  color: '#43454b',
                  fontWeight: 500,
                  fontSize: 16,
                  marginTop: 6,
                  marginBottom: 10,
                }}>
                ${item.price}
              </Text>
            ) : (
              <Text
                style={{
                  color: '#43454b',
                  fontWeight: 500,
                  fontSize: 16,
                  marginTop: 6,
                  marginBottom: 10,
                }}>
                {/* ${item.price} */}
                Points : {skinCareProducts[1].points}
              </Text>
            )}
          </View>
        </Pressable>
        <TouchableOpacity onPress={() => handleWishlistPress(item)}>
          <Animated.View
            style={{transform: [{scale: animationValues[item.id] || 1}]}}>
            <Icon
              style={{position: 'absolute', right: 20, top: -38}}
              name={idExists ? 'heart' : 'heart-o'}
              size={25}
              color={idExists ? 'red' : 'grey'}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  };

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / itemWidth);
    setActiveIndex(index);
  };

  const renderDotIndicator = () => {
    const hairCareDatalength = skinCareProducts.length / 2;

    return (
      <View style={styles.dotContainer}>
        {skinCareProducts.slice(hairCareDatalength).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotIndicator,
              {
                backgroundColor: index === activeIndex ? '#406066' : '#cccccc',
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Skin Care</Text>
      </View>

      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.categoryContainer}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={itemWidth * 2}
        decelerationRate="fast"
        onScroll={handleScroll}
        ref={flatListRef}
      />
      {renderDotIndicator()}
    </View>
  );
};

export default HomeSkinCareCategory;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 / 1.1;
/* const styles = StyleSheet.create({
  categoryContainer: {
    // paddingHorizontal: 10,
  },
  itemContainer: {
    position: "relative",
    // alignItems: 'center',
    // marginRight: 10,
  },
  categoryImages: {
    height: 175,
    width: 180,
    marginRight: 10,
    // height: 180,
    // width: itemWidth,
    // borderRadius: 4,
  },
  textContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // paddingHorizontal: 10,
    // width: '100%',
  },
  itemText: {
    color: "#0066cc",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E7E7E7",
    // width: '97%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "Fidena",
    letterSpacing: 0.6,
    padding: 10,
    color: "#000000",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 30,
  },
  dotIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  bannerContainer: {
    position: "absolute",
    top: 0,
    right: 20,
    backgroundColor: "#92be2b",
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  bannerText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "relative",
  },
}); */

const styles = StyleSheet.create({
  categoryContainer: {
    // paddingHorizontal: 10,
  },
  itemContainer: {
    position: 'relative',
    // alignItems: 'center',
    // marginRight: 10,
  },
  categoryImages: {
    height: 175,
    width: 180,
    marginRight: 10,
    // height: 180,
    // width: itemWidth,
    // borderRadius: 4,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingHorizontal: 10,
    // width: '100%',
  },
  itemText: {
    color: '#0066cc',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E7E7E7',
    // width: '97%',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    padding: 10,
    color: '#000000',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  dotIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  bannerContainer: {
    position: 'absolute',
    top: 0,
    right: 20,
    backgroundColor: '#92be2b',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  bannerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
  },
});
