import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import Logo from '../assets/bedelighted-logo.png';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.MainView}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
              fontWeight: '500',
              marginTop: 12,
              color: '#041E42',
              // paddingHorizontal: 20,
            }}>
            Lost your password?
          </Text>
          <Text
            style={{
              // paddingHorizontal: 20,
              color: '#000000',
              fontWeight: '350',
              fontSize: 15,
              marginTop: 18,
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
            }}>
            Please enter your username or email address. You will receive a link
            to create a new password via email.
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.textInput}
                placeholder="Username or email"
              />
            </View>
          </View>

          <View style={{height: 30}} />
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
  keyboardView: {
    flex: 1,
    width: '100%',
  },
  MainView: {
    backgroundColor: 'white',
    margin: 10,
    // height: 300,
    padding: 20,
  },

  inputContainer: {
    marginTop: 10,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 18,
  },
  textInput: {
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    color: '#000000',
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 0.4,
    padding: 10,
  },
  resetButton: {
    width: '100%',
    backgroundColor: '#3F6065',
    padding: 15,
  },
  resetButtonText: {
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
