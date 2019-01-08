import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screen/LoginScreen'

export default class App extends React.Component {
  render() {
    return (
      <View>
            {/* <View style={styles.container}></View> */}
        <LoginScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
