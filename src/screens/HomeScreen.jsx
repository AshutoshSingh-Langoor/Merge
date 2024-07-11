import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  Button,
  FlatList,
} from "react-native";
// import Carousel from 'react-native-snap-carousel';
import HomeCarousal from "../components/HomeCarousal";
import HomeHeader from "../components/HomeHeader";
import Banner from "../assets/Banner.jpg";
import HomeDeals from "../components/HomeDeals";
import HomeCategory from "../components/HomeCategory";
import HomeSkinCareCategory from "../components/HomeSkinCareCategory";
import HomeHairCareCategory from "../components/HomeHairCareCategory";
import HomeFragranceCategory from "../components/HomeFragranceCategory";

import { useRoute } from "@react-navigation/native";

import { fetchUserProfile } from "../services/user_profile";

const HomeScreen = () => {
  useEffect(() => {
    const getUserProfile = async () => {
      const profileData = await fetchUserProfile();
      if (profileData) {
        console.log("User Profile:", profileData);
      }
    };

    getUserProfile();
  }, []);

  const [toggleSwitchButton, setToggleSwitchButton] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <HomeHeader
        toggleButton={toggleSwitchButton}
        setToggleButton={setToggleSwitchButton}
      />
      {toggleSwitchButton ? (
        <View>
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/I/71onovtT6mL._SY625_.jpg",
            }}
            style={styles.bannerImage}
          />
          {/* Banner */}
          <HomeCarousal toggleButton={toggleSwitchButton} />
          <HomeDeals toggleButton={toggleSwitchButton} />
          {/* Banner2 */}
          <View style={styles.banner2Container}>
            <ImageBackground
              source={{
                uri: "https://www.linoperros.com/cdn/shop/files/LWHB02616FUSCHIA-53.jpg?v=1708433152&width=1800",
              }}
              style={styles.banner2Image}
              imageStyle={{
                borderRadius: 4,
                width: "100%",
              }}
            >
              <View style={styles.buttonContainer}>
                <Button
                  title="Click Me"
                  onPress={() => alert("Button Pressed!")}
                  color="#3F6065"
                />
              </View>
            </ImageBackground>
          </View>
          <HomeSkinCareCategory toggleButton={toggleSwitchButton} />
          <HomeHairCareCategory toggleButton={toggleSwitchButton} />
          <HomeCategory />
          {/* <HomeFragranceCategory /> */}
        </View>
      ) : (
        <View>
          {/* Banner */}

          <HomeCarousal toggleButton={toggleSwitchButton} />
          <Image source={Banner} style={styles.bannerImage} />
          {/* Banner2 */}
          <View style={styles.banner2Container}>
            <ImageBackground
              source={{
                uri: "https://m.media-amazon.com/images/I/71HyWpTisTL._SL1500_.jpg",
              }}
              style={styles.banner2Image}
              imageStyle={{
                // borderRadius: 4,
                width: "100%",
              }}
            >
              <View style={styles.buttonContainer}>
                <Button
                  title="SHOP NOW"
                  onPress={() => alert("Button Pressed!")}
                  color="#3F6065"
                />
              </View>
            </ImageBackground>
          </View>
          <HomeCategory />
          <HomeDeals toggleButton={toggleSwitchButton} />
          <HomeHairCareCategory toggleButton={toggleSwitchButton} />
          <HomeSkinCareCategory toggleButton={toggleSwitchButton} />
          {/* <HomeFragranceCategory /> */}
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },

  bannerImage: {
    width: "auto",
    justifyContent: "center",
    height: 250,
    marginHorizontal: 12,
    backgroundColor: "white",
    marginVertical: 20,
  },

  banner2Image: {
    width: "94%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 250,
    borderRadius: 4,
    marginVertical: 20,
  },
  banner2Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    // backgroundColor: '#3F6065',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});
