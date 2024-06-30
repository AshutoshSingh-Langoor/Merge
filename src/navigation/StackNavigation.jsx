import React from 'react';
import {StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CategoryScreen from '../screens/ShopScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import ForgotPassword from '../screens/ForgotPassword';
import SkinCareDetailScreen from '../pages/SkinCareDetailScreen';
import HairCareDetailScreen from '../pages/HairCareDetailScreen';
import FragranceDetail from '../pages/FragranceDetailScreen';
import WishListScreen from '../screens/WishListScreen';
import DrawerContent from '../components/DrawerContent';
import ShopScreen from '../screens/ShopScreen';
import AccountScreen from '../screens/AccountScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import DrawerComp from '../components/DrawerComp';
import FAQ from '../pages/FAQ';
import ContactUs from '../pages/ContactUs';
import GlobalCart from '../pages/GlobalCart';
import SingleCart from '../pages/SingleCart';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// function DrawerNav() {
//   return (
//     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//       <Drawer.Screen name="BottomTabs" component={BottomTabs} />
//       <Drawer.Screen name="Category" component={CategoryScreen} />
//       <Drawer.Screen name="Search" component={SearchScreen} />
//       <Drawer.Screen name="Cart" component={CartScreen} />
//       <Drawer.Screen name="Wishlist" component={WishListScreen} />
//     </Drawer.Navigator>
//   );
// }


function BottomTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 4},
        tabBarItemStyle: {padding: 5},
        tabBarStyle: {height: 50},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,

          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home-sharp" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="home-outline" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="search-sharp" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="search-outline" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome5 name="shopping-bag" size={18} color="#3F6065" />
            ) : (
              <SimpleLineIcons name="handbag" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishListScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntDesign name="heart" size={18} color="#3F6065" />
            ) : (
              <AntDesign name="hearto" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="person" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="person-outline" size={18} color="#3F6065" />
            ),
          tabBarButton: props => (
            <TabBarButton
              {...props}
              onPress={() => handleAccountPress(props,navigation)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function handleAccountPress(props,navigation) {
  Alert.alert('Login Account', 'Please Login Your Accunt', [
    {
      text: 'Cancel',
      onPress: () => navigation.navigate('Login'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => props.onPress()},
  ]);
}

function TabBarButton({children, onPress}) {
  return (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

// Guest Screen Bottom Tabs;

function BottomTabGuest() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 4},
        tabBarItemStyle: {padding: 5},
        tabBarStyle: {height: 50},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,

          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home-sharp" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="home-outline" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: 'Shop',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="search-sharp" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="search-outline" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome5 name="shopping-bag" size={18} color="#3F6065" />
            ) : (
              <SimpleLineIcons name="handbag" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishListScreen}
        options={{
          tabBarLabel: 'Wishlist',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <AntDesign name="heart" size={18} color="#3F6065" />
            ) : (
              <AntDesign name="hearto" size={18} color="#3F6065" />
            ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: {
            color: '#3F6065',
            fontSize: 10,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="person" size={18} color="#3F6065" />
            ) : (
              <Ionicons name="person-outline" size={18} color="#3F6065" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigation***************************************************

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false,BottomTabs:false}}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{headerShown: false,BottomTabs:false}}
          
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false,BottomTabs:false}}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Drawer" component={DrawerComp} />
        <Stack.Screen name="Detail" component={SkinCareDetailScreen} />
        <Stack.Screen name="HairCareDetail" component={HairCareDetailScreen} />
        <Stack.Screen name="FragranceDetail" component={FragranceDetail} />
        <Stack.Screen name="FAQs" component={FAQ} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Related Products" component={GlobalCart} />
        <Stack.Screen name="SingleCart" component={SingleCart} />
        {/* <Stack.Screen
          name="SkinCare"
          component={SkinCare} */}
        {/* // options={{headerShown: false}} */}
        {/* /> */}
        {/* <Stack.Screen name="HairCare" component={HairCare} /> */}
        {/* <Stack.Screen name="Fragrance" component={Fragrance} /> */}
        <Stack.Screen
          name="GuestScreen"
          component={BottomTabGuest}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
