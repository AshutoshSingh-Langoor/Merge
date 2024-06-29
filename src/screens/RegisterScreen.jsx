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
import React, {useState} from 'react';
// import {MaterialIcons} from '@expo/vector-icons';
// import {AntDesign} from '@expo/vector-icons';
// import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/bedelighted-logo.png';
import {ScrollView} from 'react-native-gesture-handler';

const RegisterScreen = () => {
  console.log('RegisterScreen loaded');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    const user = {name, email, password};
    const serverUrl =
      Platform.OS === 'android'
        ? 'http://localhost:8081/register'
        : 'http://localhost:8081/register';

    try {
      console.log('Making API request to:', serverUrl, 'with user:', user);
      const response = await axios.post(serverUrl, user);
      console.log('Response from server:', response);

      Alert.alert(
        'Registration Successful',
        'You have registered successfully',
      );

      setName('');
      setPassword('');
      setEmail('');

      navigation.navigate('Login');
    } catch (error) {
      console.log('Catch Registration error:', error.message);

      Alert.alert(
        'Registration Error',
        'An error occurred during registration. Please try again.',
      );
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
                value={name}
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
                value={email}
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
                value={password}
                editable={false}
                secureTextEntry={true}
                style={styles.textInput}
                placeholder="Enter your password"
              />
            </View>
          </View>

          {/* <View style={styles.optionsContainer}>
            <Text style={{color: '#000000'}}>Keep me logged in</Text>
            <Text style={{color: '#007FFF', fontWeight: '700'}}>
              Forgot password
            </Text>
          </View> */}

          <View style={{marginTop: 30}} />
          <Pressable onPress={handleRegister} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    // flex: 1,
    // width: "100%",
    // justifyContent: "center",
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
  optionsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  registerButton: {
    width: '85%',
    backgroundColor: '#3F6065',
    borderRadius: 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
  },
  registerButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'Fidena',
    fontWeight: 300,
    letterSpacing: 0.6,
    // fontWeight: 'bold',
  },
});
