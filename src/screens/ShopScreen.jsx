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
import {useNavigation} from '@react-navigation/native';

const ShopScreen = () => {
  const categories = [
    {
      title: 'Skincare',
      items: [
        {
          title: 'Cream, Gel & Serum',
          items: [
            'Face oils & Balm',
            'Face moisturizer & day cream',
            'Night Cream',
            'Face Gels',
          ],
        },
        {
          title: 'Masks',
          items: ['Face Masks & Packs', 'Sheet Masks', 'Sleeping Masks'],
        },
        {
          title: 'Eye Care',
          items: [
            'Under Eye Cream, Gel & Serum',
            'Under Eye Roll On',
            'Eye Masks & Patches',
          ],
        },
      ],
    },
    {
      title: 'Makeup',
      items: [
        {
          title: 'Face',
          items: [
            'BB & CC Cream',
            'Blush',
            'Highlighters',
            'Setting Spray & Fixers',
          ],
        },
        {
          title: 'Eye',
          items: ['Kajal & Kohls', 'Eyeliner', 'Eye shadow'],
        },
      ],
    },
    {
      title: 'Hair Care',
      items: [
        {
          title: 'Hair Tools & Accessories',
          items: ['Head Massager'],
        },
        {
          title: 'Hair Styling',
          items: [
            'Hair Color',
            'Hair Cream. Packs  Masks',
            'Shampoo',
            'Hair Oil',
            'Hair Serum',
          ],
        },
      ],
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
              color: '#636363',
              fontFamily: 'Montserrat',
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
        <Accordion key={index} title={category.title} items={category.items} />
      ))}
    </ScrollView>
  );
};

const Accordion = ({title, items}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navigation = useNavigation();
  const categoryMap = {
    'Face oils & Balm': 'FaceOilandBalm',
    'Face moisturizer & day cream': 'MoisturizerandDayCream',
    'Night Cream': 'NightCream',
    'Face Gels': 'FaceGel',
    'Face Masks & Packs': 'FaceMaskPack',
    'Sheet Masks': 'SheetMask',
    'Sleeping Masks': 'SleepingMask',
    'Under Eye Cream, Gel & Serum': 'SkinCare',
    'Under Eye Roll On': 'UnderEyeRoll',
    'Eye Masks & Patches': 'EyePatches',
    'BB & CC Cream': 'BBCream',
    'Blush': 'Blush',
    'Highlighters': 'Highlighters',
    'Setting Spray & Fixers': 'SkinCare',
    'Kajal & Kohls': 'SkinCare',
    'Eyeliner': 'SkinCare',
    'Eye shadow': 'SkinCare',
    'Head Massager': 'SkinCare',
    'Hair Color': 'SkinCare',
    'Hair Cream. Packs  Masks': 'SkinCare',
    'Shampoo': 'SkinCare',
    'Hair Oil': 'SkinCare',
    'Hair Serum': 'SkinCare',
  };

  const handlePress = item => {
    const screenName = categoryMap[item];
    if (screenName) {
      navigation.navigate(screenName, {category: item});
    }
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Text style={styles.toggleIcon}>{isCollapsed ? '+' : '-'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.content}>
          {items.map((item, index) =>
            typeof item === 'string' ? (
              <TouchableOpacity
                key={index}
                style={styles.subItem}
                onPress={() => handlePress(item)}>
                <Text style={styles.subItemText}>{item}</Text>
              </TouchableOpacity>
            ) : (
              <Accordion key={index} title={item.title} items={item.items} />
            ),
          )}
        </View>
      </Collapsible>
    </View>
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
    borderColor: '#636363',
    marginTop: 10,
    width: '90%',
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    padding: 8,
    color: 'white',
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
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
    // fontFamily: 'Montserrat',
    letterSpacing: 0.8,
    color: 'black',
    fontWeight: '400',
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
  subItemText: {
    color: 'black',
  },
});