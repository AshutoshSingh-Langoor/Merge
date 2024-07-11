import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';

const screenWidth = Dimensions.get('window').width;

export default function Carousel({toggleButton}) {
  const CarouselData = [
    {
      collection_image: toggleButton
        ? 'https://static.vecteezy.com/system/resources/previews/002/124/914/non_2x/realistic-cosmetic-advertisement-editable-banner-vector.jpg'
        : 'https://images.samsung.com/is/image/samsung/p6pim/in/feature/165109871/in-feature-galaxy-a55-5g-sm-a556-498926-540539394?$FB_TYPE_A_JPG$',
    },
    {
      collection_image: toggleButton
        ? 'https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        : 'https://images.samsung.com/in/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-kv.jpg?imbypass=true',
    },
    {
      collection_image: toggleButton
        ? 'https://www.dontwasteyourmoney.com/wp-content/uploads/2022/06/AdobeStock_307352791-900x400.jpeg'
        : 'https://images.samsung.com/is/image/samsung/p6pim/in/feature/164474451/in-feature-brilliant--long-lasting-color-with-quantum-dot-535858372?$FB_TYPE_K_JPG$',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === CarouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: 0,
        });
        setActiveIndex(0);
      } else {
        flatlistRef.current.scrollToIndex({
          animated: true,
          index: activeIndex + 1,
        });
        setActiveIndex(activeIndex + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Image style={styles.image} source={{uri: item.collection_image}} />
        <View style={styles.dotContainer}>{renderDotIndicator()}</View>
      </View>
    );
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }, []);

  const renderDotIndicator = () => {
    return CarouselData.map((dot, index) => (
      <View
        key={index}
        style={
          index === activeIndex
            ? styles.activedotindicator
            : styles.dotindicator
        }
      />
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CarouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 30, // paddingHorizontal: 15,
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  contentContainer: {},
  itemContainer: {
    position: 'relative',
  },
  image: {
    height: 300,
    width: screenWidth,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotindicator: {
    backgroundColor: 'white',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activedotindicator: {
    backgroundColor: '#fcb800',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
});
