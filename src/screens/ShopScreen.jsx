import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Collapsible from 'react-native-collapsible';

const ShopScreen = () => {
  const categories = [
    {
      title: 'Skincare',
      items: ['Cream & Serum', 'Face pack & Face Mask', 'Scrub & Moisturizer'],
    },
    {
      title: 'Makeup',
      items: ['Lipsticks', 'Lip Balms', 'Mascara'],
    },
    {
      title: 'Haircare',
      items: ['Hair Serum', 'Hair Mask'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: '#3F6068',
          height: 80,
        }}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 20,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '90%',
              borderWidth: 1,
              borderColor: '#ddd',
              paddingLeft: 10,
              color: 'gray',
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
              justifyContent: 'flex-start',
            }}
            placeholder="I'm shopping for..."
          />
          <Ionicons
            name="search"
            size={24}
            color="#3F6065"
            style={styles.searchIcon}
          />
        </View>
      </View>
      {categories.map((category, index) => (
        <Accordion key={index} title={category.title}>
          {category.items.map((item, subIndex) => (
            <View key={subIndex} style={styles.subItem}>
              <Text>{item}</Text>
            </View>
          ))}
        </Accordion>
      ))}
    </ScrollView>
  );
};

const Accordion = ({title, children}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <View style={styles.accordionContainer}>
        <TouchableOpacity
          onPress={() => setIsCollapsed(!isCollapsed)}
          style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.toggleIcon}>{isCollapsed ? '+' : '-'}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isCollapsed}>
          <View style={styles.content}>{children}</View>
        </Collapsible>
      </View>
    </>
  );
};
export default ShopScreen;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    width: '90%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    // paddingLeft: 10,
  },
  searchIcon: {
    padding: 8,
    color: 'white',
    // justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    // paddingHorizontal: 10,
  },
  accordionContainer: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Fidena',
    letterSpacing: 0.8,
    color: 'black',
    fontWeight: '200',
  },
  toggleIcon: {
    fontSize: 16,
    color: 'black',
  },
  content: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    color: 'black',
    fontWeight: '300',
  },
  subItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
