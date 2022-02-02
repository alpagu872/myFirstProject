import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Card from './components/Card'

function App() {


  return (
    <SafeAreaView style={styles.container}>


      <Card
        title="Eddard STARK"
        quote="Önemli sözler" />
      <Card
        title="Hasan "
        quote="Falan" />
      <Card
        title="Arif IŞIK"
        quote="Evet, tarafından." />


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
