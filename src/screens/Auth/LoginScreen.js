import {Button, SafeAreaView, StyleSheet, Text, View,ActivityIndicator,Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  AuthNavigator,
  AdminNavigator,
  EmployeeNavigator,
  AppNavigator,
} from '../../navigation/Index';
import {useNavigation} from '@react-navigation/native';
import {
  THEME_COLOR,
  globalStyles,
  width,
  height,
  StyleSheets,
} from '../../components/Common/Styles';
import {
  DarkTextLarge,
  MainContainer,
  ProfileContainer,
  StyledButton,
  StyledTextInput,
} from '../../components/Common/StyledComponent';
import {MMKV} from 'react-native-mmkv';
import {useDispatch} from 'react-redux';
import {
  setIsAdmin,
  setIsAuthenticated,
} from '../../store/modules/UserDetailsSlice';
import Test from '../../components/Common/Test'


const storage = new MMKV();

export default function LoginScreen() {
  const navigation = useNavigation();
  const [focusInEmail, setFocusInEmail] = useState(false);
  const [focusInPass, setFocusInPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
    error: '',
  });
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const handleClickEmail = event => {
    // event.persist();
    const emailValue = event.nativeEvent.text.toLowerCase();
    // console.log("email => ",emailValue)
    setEmail(emailValue);
    setError(prev => ({...prev, email: ''}));
    setError(prev => ({...prev, error: ''}));
  };

  const handleClickPass = event => {
    // event.persist();
    const passwordValue = event.nativeEvent.text;
    setPassword(passwordValue);
    setError(prev => ({...prev, password: ''}));
    setError(prev => ({...prev, error: ''}));
  };
  const onSubmit = async () => {

   
    setToggle(true);
    setTimeout(()=>setToggle(false),2000)

    if (email == '') {
      setError(prev => ({...prev, email: 'Please enter your email'}));
      setToggle(false);
      return;
    }
    if (password == '') {
      setError(prev => ({...prev, password: 'Please enter your Password'}));
      setToggle(false);
      return;
    }
    try {
      let isAdmin = false;
      if (email.toLowerCase().includes('admin')) {
        isAdmin = true;
      }
      const userDetails = {
        name: 'Harsh pal',
        isAdmin: isAdmin,
        isAuthenticated: true,
        email: email,
        password: password,
      };
     

        storage.set('userDetails', JSON.stringify(userDetails));
        dispatch(setIsAuthenticated(true));
        dispatch(setIsAdmin(isAdmin));
      

    //   console.log('after');
    } catch (err) {
      setError(prev => ({...prev, error: err}));
    } finally {
      setToggle(false);
    }
  };
  // console.log('toggle => ',   StyleSheets());
  return (
    <MainContainer style={{backgroundColor: THEME_COLOR}}>
      <View
        style={{
          height: 370,
          backgroundColor: 'white',
          width: width + 100,
          borderBottomLeftRadius: (width + 270) / 2,
          borderBottomRightRadius: (width + 270) / 2,
        }}></View>
      <View style={[{width: '100%',backgroundColor:'transparent',position: 'absolute',top:100},globalStyles.flexBox]}>
        <Image source={require('../../assets/akhilsystems_transparent_logo.png')} resizeMode='contain' style={{width:width,height:100,backgroundColor:'transparent'}} />
      </View>
      <ProfileContainer
        style={[{marginTop: -200, width: '85%'}, globalStyles.flexBox]}>
        <DarkTextLarge
          style={{
            fontSize: 20,
            marginVertical: 20,
            fontSize: 22,
            fontWeight: '600',
          }}>
          Sign In Your Account
        </DarkTextLarge>
        <StyledTextInput
          style={[{borderBottomColor: focusInEmail ? THEME_COLOR : 'grey'}]}
          placeholder="Email"
          placeholderTextColor={focusInEmail ? THEME_COLOR : 'grey'}
          onFocus={() => setFocusInEmail(true)}
          onBlur={() => setFocusInEmail(false)}
          onChange={handleClickEmail}
          defaultValue={email.toLowerCase()}
        />
        {error.email != '' && (
          <Text style={{fontSize: 13, color: 'red'}}>{error.email}</Text>
        )}
        <StyledTextInput
          style={[{borderBottomColor: focusInPass ? THEME_COLOR : 'grey'}]}
          placeholder="Password"
          placeholderTextColor={focusInPass ? THEME_COLOR : 'grey'}
          onFocus={() => setFocusInPass(true)}
          onBlur={() => setFocusInPass(false)}
          onChange={handleClickPass}
          secureTextEntry={true}
          autoCorrect={false}
        />
        {error.password != '' && (
          <Text style={{fontSize: 13, color: 'red'}}>{error.password}</Text>
        )}
        <StyledButton disabled={toggle} style={[globalStyles.flexBox]} onPress={onSubmit}>
          {toggle ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <Text style={{color: 'white', fontWeight: '800', fontSize: 17}}>
              Sign In
            </Text>
          )}
        </StyledButton>
        {error.error != '' && (
          <Text style={{fontSize: 13, color: 'red'}}>{error.error}</Text>
        )}
      </ProfileContainer>

    </MainContainer>
  );
}

const styles = StyleSheet.create({});
