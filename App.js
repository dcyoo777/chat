import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ChattingRoomScreen from "./Screen/ChattingRoomScreen";
import HomeScreen from "./Screen/HomeScreen";

const App = () => {

  const [screen, setScreen] = useState('Home')
  const [screenView, setScreenView] = useState()
  const [name, setName] = useState('');

  useEffect(() => {
    switch(screen){
      case 'Home':
        setScreenView(<HomeScreen setName={setName} setScreen={setScreen}/>)
        break;
      case 'Room':
        setScreenView(<ChattingRoomScreen name={name} setScreen={setScreen}/>)
        break;
    }

  }, [screen])

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1, flexDirection: "column"}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {screenView}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
