import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Alert,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Logo from '../assets/bedelighted-logo.png';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading
  const navigation = useNavigation();

  const handleGuestLogin = () => {
    navigation.navigate('GuestScreen');
  };

  const handleLogin = async () => {
    setLoading(true); // Show loader
    try {
      const response = await fetch('https://native.bedelighted.afucent.com/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);
        navigation.replace('Main');
      } else {
        console.log('Error:', data);
        Alert.alert('Wrong Credentials', 'Please check your credentials');
      }
    } catch (error) {
      console.log('Login Error:', error);
      Alert.alert('Login Error', 'Something went wrong');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.centeredView}>
          <Text style={styles.loginText}>Login</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </Pressable>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            margin: 15,
            paddingVertical: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              padding: 10,
              paddingHorizontal: 30,
              color: 'black',
              fontSize: 16,
              fontFamily: 'Fidena',
              letterSpacing: 0.6,
              fontWeight: '300',
              paddingBottom: 25,
            }}
          >
            Log In Your Account
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.textInput}
                placeholder="Enter your email"
              />
            </View>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <View style={styles.inputView}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                  style={styles.textInput}
                  placeholder="Enter your password"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 6,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
              paddingVertical: 6,
            }}
          >
            <Text style={{ color: '#000000', fontWeight: 300 }}>Remember me</Text>
            <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{ color: '#007FFF', fontWeight: '300' }}>
                Forgot your password?
              </Text>
            </Pressable>
          </View>
          <View style={{ paddingVertical: 15 }} />
          <Pressable
            onPress={handleLogin}
            style={{
              width: '85%',
              backgroundColor: '#3F6065',
              borderRadius: 3,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 12,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 17,
                  fontWeight: '300',
                  fontFamily: 'Fidena',
                  letterSpacing: 0.6,
                }}
              >
                Log in
              </Text>
            )}
          </Pressable>
        </View>
        <View style={{ marginTop: 100 }}>
          <Pressable
            onPress={handleGuestLogin}
            style={{
              width: '85%',
              backgroundColor: '#3F6065',
              borderRadius: 3,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 12,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
                fontSize: 17,
                fontWeight: '300',
              }}
            >
              Login as guest
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    paddingVertical: 20,
  },
  loginText: {
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    fontSize: 26,
    fontWeight: '500',
    color: '#3F6065',
  },
  registerText: {
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    fontSize: 26,
    fontWeight: '500',
    color: '#3F6065',
  },
  inputContainer: {
    marginTop: 10,
    paddingHorizontal: 30,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 450,
    backgroundColor: 'white',
    paddingVertical: 4,
  },
  textInput: {
    color: 'gray',
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 0.4,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
});
