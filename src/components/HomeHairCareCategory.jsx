// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   Dimensions,
//   Pressable,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import React, { useEffect, useRef, useState } from 'react';
// import {useNavigation} from '@react-navigation/native';
// import { fetchAllProducts } from '../services/all_products';
// import { useDispatch, useSelector } from 'react-redux';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
// import { addtowishlist, removefromwishlist } from '../Redux/Action';

// const HomeHairCareCategory = ({toggleButton}) => {
//   const navigation = useNavigation();
//   const screenWidth = Dimensions.get('window').width;
//   const itemWidth = screenWidth / 2;
//   const dispatch = useDispatch();

//   const [haircaredata, setHaircaredata] = useState([]);
//   const wishlistData = useSelector((state) => state.reducerWishlist);
//   const animationValues = useRef({}).current;
//   const AllIds = wishlistData.map(product => product.id);

//   useEffect(() => {
//     const getProductsData = async () => {
//       try {
//         const ProductsData = await fetchAllProducts();
//         if (ProductsData) {
//           const HaircareProduct = ProductsData.filter(product =>
//             product.categories.includes("Haircare") || product.categories.includes("Hair Care")
//           );
//           setHaircaredata(HaircareProduct);
//         }
//       } catch (error) {
//         console.error('Error fetching hair care products:', error);
//         // Handle error state or retry mechanism if needed
//       }
//     };

//     getProductsData();
//   }, [wishlistData]);

//   const handleWishlistPress = (item) => {
//     if (!animationValues[item.id]) {
//         animationValues[item.id] = new Animated.Value(1);
//     }

//     const idExists = AllIds.includes(item.id);
    
//     if (idExists) {
//         dispatch(removefromwishlist(item));
//     } else {
//         dispatch(addtowishlist(item));
//     }

//     Animated.sequence([
//         Animated.timing(animationValues[item.id], {
//             toValue: 1.05,
//             duration: 200,
//             useNativeDriver: true,
//         }),
//         Animated.timing(animationValues[item.id], {
//             toValue: 1,
//             duration: 200,
//             useNativeDriver: true,
//         }),
//     ]).start();
//   };

//   const renderItem = ({ item }) => {
//     const idExists = AllIds.includes(item.id);
//     return (
//       <View style={[styles.itemContainer, { width: itemWidth }]}>
//         <Pressable onPress={() => navigation.navigate('SingleCart', { item })}>
//           <Image source={{ uri: item.image }} style={styles.categoryImages} />
//           {!toggleButton && (
//           <View style={styles.bannerContainer}>
//             <Text style={styles.bannerText}>Trial</Text>
//           </View>
//         )}
//           <View style={styles.priceContainer}>
//               <TouchableOpacity  onPress={() => handleWishlistPress(item)}>
//                 <Animated.View style={{ transform: [{ scale: animationValues[item.id] || 1 }] }}>
//                   <Icon
//                   style={{position:'absolute',right:7,top:8}}
//                     name={idExists ? 'heart' : 'heart-o'}
//                     size={25}
//                     color={idExists ? 'red' : 'gray'}
//                   />
//                 </Animated.View>
//               </TouchableOpacity>
//             </View>
//           <View style={styles.textContainer}>
//             <Text style={styles.itemText}>{item.title}</Text>           
//               <Text style={styles.priceText}>{item.price}</Text>
//           </View>
//         </Pressable>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Hair Care</Text>
//       </View>
//       <FlatList
//         horizontal
//         data={haircaredata}
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

// export default HomeHairCareCategory;
// const screenWidth = Dimensions.get('window').width;
// const itemWidth = screenWidth / 2.15;

// const styles = StyleSheet.create({

//   categoryContainer: {
//     // paddingHorizontal: 10,
//   },
//   itemContainer: {
//     position: 'relative',

//     // alignItems: 'center',
//     // marginRight: 10,
//   },
//   categoryImages: {
//     height: 175,
//     width: 180,
//     marginRight: 10,
//     // borderRadius: 4,
//   },
//   textContainer: {
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     // paddingHorizontal: 10,
//     // width: '100%',
//   },
//   itemText: {
//     color: '#0066cc',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     marginVertical: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#E7E7E7',
//     width: '97%',
//   },
//   headerText: {
//     fontSize: 16,
//     fontWeight: '300',
//     fontFamily: 'Fidena',
//     letterSpacing: 0.6,
//     padding: 10,
//     color: '#000000',
//   },
//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 25,
//     marginBottom: 30,
//   },
//   dotIndicator: {
//     height: 10,
//     width: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//     marginBottom: 20,
//   },
//   bannerContainer: {
//     position: 'absolute',
//     top: 0,
//     right: 10,
//     backgroundColor: '#92be2b',
//     paddingVertical: 4,
//     paddingHorizontal: 12,
//   },
//   bannerText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
  
// //   container: {
// //    flex: 1,
// //    backgroundColor: '#F8F8F8',
// //    paddingHorizontal: 10,
// //    paddingBottom: 5,
// //  },
// //  header: {
// //    backgroundColor: 'black',
// //    padding: 10,
// //    borderRadius: 5,
// //    marginVertical: 10,
// //  },
// //  headerText: {
// //    fontSize: 16,
// //    fontWeight: '600',
// //    color: '#fff',
// //    textAlign:'center',
// //    justifyContent:'center'

// //  },
// //  categoryContainer: {
// //    paddingVertical: 10,
// //  },
// //  itemContainer: {
// //    alignItems: 'center',
// //    padding: 5,
// //    marginHorizontal: 5,
// //    backgroundColor: '#FFF',
// //    borderRadius: 10,
// //    shadowColor: '#000',
// //    shadowOffset: { width: 0, height: 2 },
// //    shadowOpacity: 0.1,
// //    shadowRadius: 5,
// //    elevation: 3,
// //    width: itemWidth
// //  },
// //  categoryImages: {
// //    height: 190,
// //    width: itemWidth,
// //    borderRadius: 10,
// //  },
// //  textContainer: {
// //    width: '100%',
// //    padding: 10,
// //  },
// //  itemText: {
// //    fontSize: 14,
// //    fontWeight: '600',
// //    color: '#333',
// //    marginBottom: 5,
// //  },
// //  priceContainer: {
// //    flexDirection: 'row',
// //    justifyContent: 'space-evenly',
// //    alignItems: 'center',
// //    position:'relative'
// //  },
// //  priceText: {
// //    color: 'green',
// //    fontWeight: '500',
// //    fontSize: 16,
// //    paddingBottom:5
  
// //      },

 
// });


import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const hairCareProducts = [
  {
    id: '1',
    title: 'Face Cream',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
  },
  {
    id: '2',
    title: 'Swiss Beauty natural product',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/30/82/f7/3082f72dce7c49c33bc08c03d32675e4.jpg',
  },
  {
    id: '3',
    title: 'Face Cream',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/66/a2/bc/66a2bc392c78a205e33b55e6dc11ad99.jpg',
  },
  {
    id: '4',
    title: 'Face Mask',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
  },
  {
    id: '5',
    title: 'Face Cream',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
  },
  {
    id: '6',
    title: 'Face Mask',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
  },
  {
    id: '7',
    title: 'Face Cream',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/a6/9c/87/a69c87888f5d04f203d85e6367e1741c.jpg',
  },
  {
    id: '8',
    title: 'Face Mask',
    price: '$ 300',
    image:
      'https://i.pinimg.com/474x/7a/97/6f/7a976fb92e368ed60fce8d88ac4dbd2e.jpg',
  },
];

const HomeHairCareCategory = ({toggleButton}) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 2;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const wishlistData = useSelector((state) => state.reducerWishlist);
  const [haircaredata, setHaircaredata] = useState([]);


  useEffect(() => {
        const getProductsData = async () => {
          try {
            const ProductsData = await fetchAllProducts();
            if (ProductsData) {
              const HaircareProduct = ProductsData.filter(product =>
                product.categories.includes("Haircare") || product.categories.includes("Hair Care")
              );
              setHaircaredata(HaircareProduct);
            }
          } catch (error) {
            console.error('Error fetching hair care products:', error);
          }
        };
    
        getProductsData();
      }, [wishlistData]);

  const renderItem = ({item}) => (
    <View style={{marginTop: 30}}>
      <Pressable
        // style={styles.itemContainer, {width: itemWidth}]}
        style={styles.itemContainer}
        onPress={() => navigation.navigate('SingleCart', {item})}>
        <Image source={{uri: item.image ||item.image}} style={styles.categoryImages} />
        {!toggleButton && (
          <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>Trial</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.title}</Text>
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
              $4.00 cashback
            {/* {item.cashback} */}
          </Text>
          <Text
            style={{
              color: '#43454b',
              fontWeight: 500,
              fontSize: 16,
              marginVertical: 8,
            }}>
            {item.price}
          </Text>
        </View>
      </Pressable>
    </View>
  );

  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offsetX / itemWidth);
    setActiveIndex(index);
  };

  const renderDotIndicator = () => {
    return (
      <View style={styles.dotContainer}>
        {hairCareProducts.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dotIndicator,
              {backgroundColor: index === activeIndex ? '#406066' : '#cccccc'},
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{marginLeft: 12}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hair Care</Text>
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
        onScroll={handleScroll}
        ref={flatListRef}
      />
      {renderDotIndicator()}
    </View>
  );
};

export default HomeHairCareCategory;

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
    width: '97%',
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
    right: 10,
    backgroundColor: '#92be2b',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  bannerText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
