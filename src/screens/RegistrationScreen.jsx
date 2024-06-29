import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Alert,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/bedelighted-logo.png';
import React from 'react';

const RegistrationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.centeredView}>
        <Pressable onPress={() => navigation.goBack()} style={{}}>
          <Text
            style={{
              fontSize: 26,
              fontFamily: 'Fidena',
              fontWeight: '300',
              color: '#3F6065',
            }}>
            Login
          </Text>
        </Pressable>
        <Text style={styles.registerText}>Register</Text>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          paddingVertical: 20,
          borderRadius: 5,
        }}>
        <Text
          style={{
            padding: 10,
            paddingHorizontal: 30,
            color: 'black',
            fontSize: 16,
            fontFamily: 'Fidena',
            letterSpacing: 0.6,
            // paddingVertical: 20,
            fontWeight: '300',
            paddingBottom: 25,
          }}>
          Register An Account
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            {/* <Ionicons
              name="person"
              size={24}
              color="gray"
              style={{marginLeft: 8}}
              /> */}
            <TextInput
              // value={name}
              editable={false}
              style={styles.textInput}
              placeholder="Enter your name"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            {/* <MaterialIcons
              style={{marginLeft: 8}}
              name="email"
              size={24}
              color="gray"
              /> */}
            <TextInput
              // value={email}
              editable={false}
              style={styles.textInput}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            {/* <AntDesign
              style={{marginLeft: 8}}
              name="lock"
              size={24}
              color="gray"
              /> */}
            <TextInput
              // value={password}
              editable={false}
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            // width: '700',
            // height: 400,
            backgroundColor: '#3F6065',
            borderRadius: 3,
            padding: 15,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: '300',
              letterSpacing: 0.6,
              fontFamily: 'Fidena',
            }}>
            Register
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6DDED',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 30,
  },
  centeredView: {
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 40,
    paddingVertical: 20,
  },
  registerText: {
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    fontSize: 26,
    fontWeight: '300',
    color: '#3F6065',
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 30,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    // marginVertical: 10,
    color: '#000000',
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 0.4,
    paddingHorizontal: 15,
  },
  // registerButton: {
  //   marginTop: 30,
  //   width: '100%',
  //   backgroundColor: '#3F6065',
  //   borderRadius: 3,
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   padding: 15,
  // },
});
