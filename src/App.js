import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Card from './components/Card'

function App() {


  return (
    <SafeAreaView style={styles.container}>
      

    <Card title = "Eddard Stark" quote = "Önemli sözler"/>
    <Card title = "Hasan " quote = "Falan"/>


    





    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',

},



});
export default App;
