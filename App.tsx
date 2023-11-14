import React from 'react';
import {SafeAreaView, StyleProp, Text, ViewStyle} from 'react-native';

function App(): JSX.Element {
  const containerStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
  return (
    <SafeAreaView style={containerStyle}>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}

export default App;
