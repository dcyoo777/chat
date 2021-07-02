import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ChattingBox from "./components/ChattingBox";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1, flexDirection: "column"}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={{height: 60, backgroundColor: "yellow"}}>
        <Text>

        </Text>
      </View>

      <View style={{flex: 1}}>
        <ChattingBox />
      </View>

      <View style={{height: 60, backgroundColor: "yellow"}}>
        <Text>

        </Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
