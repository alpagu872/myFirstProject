import React from 'react';
import { SafeAreaView, View, Text, StyleSheet,Button } from 'react-native';


function App() {
  function sayHello(label) {
    console.log('Merhabalar ' + label);


  };
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Button title="Hi" 
        onPress={console.log('Hi')}
        />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius:5,

  },
});
export default App;
