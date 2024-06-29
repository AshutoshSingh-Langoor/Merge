import {StatusBar} from 'expo-status-bar';
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
} from 'react-native';
import Logo from '../assets/bedelighted-logo.png';
// import {MaterialIcons} from '@expo/vector-icons';
// import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import ForgotPassword from './ForgotPassword';
// import RegisterScreen from './RegisterScreen';
import RegistrationScreen from './RegistrationScreen';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleGuestLogin = () => {
    navigation.navigate('GuestScreen');
  };
  // const handleRegister = () => {
  //   navigation.navigate('RegisterScreen');
  // };

  const handleLogin = () => {
    const email = 'Admin@gmail.com';
    const password = 'Admin@123';

    if (email === 'Admin@gmail.com' && password === 'Admin@123') {
      // Successful login
      navigation.replace('Main');
    } else {
      // Unsuccessful login
      Alert.alert('Login Error', 'Invalid Email or Password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={Logo} />
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.centeredView}>
          <Text style={styles.loginText}>Login </Text>
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
          }}>
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
            }}>
            Log In Your Account
          </Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputView}>
              {/* <MaterialIcons
              style={{marginLeft: 8}}
              name="email"
              size={24}
              color="gray"
              /> */}
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
                {/* <AntDesign
                style={{marginLeft: 8}}
                name="lock"
                size={24}
                color="gray"
                /> */}
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
            }}>
            <Text style={{color: '#000000', fontWeight: 300}}>Remember me</Text>
            <Pressable onPress={() => navigation.navigate(ForgotPassword)}>
              <Text style={{color: '#007FFF', fontWeight: '300'}}>
                Forgot your password?
              </Text>
            </Pressable>
          </View>
          <View style={{paddingVertical: 15}} />
          <Pressable
            onPress={handleLogin}
            style={{
              width: '85%',

              backgroundColor: '#3F6065',
              borderRadius: 3,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 12,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 17,
                fontWeight: '300',
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
              }}>
              Log in
            </Text>
          </Pressable>
        </View>
        <View style={{marginTop: 100}}>
          <Pressable
            onPress={handleGuestLogin}
            style={{
              width: '85%',
              backgroundColor: '#3F6065',
              borderRadius: 3,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 12,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Fidena',
                letterSpacing: 0.6,
                fontSize: 17,
                fontWeight: '300',
              }}>
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
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    paddingVertical: 20,
    // paddingHorizontal: 90,
  },
  loginText: {
    fontFamily: 'Fidena',
    letterSpacing: 0.6,
    fontSize: 26,
    fontWeight: '500',
    // marginTop: 12,
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
    // gap: 5,
    backgroundColor: 'white',
    paddingVertical: 4,

    // paddingVertical: 5,
    // borderRadius: 5,
  },
  textInput: {
    // marginVertical: 10,
    color: 'gray',
    width: '100%',
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 0.4,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
});
