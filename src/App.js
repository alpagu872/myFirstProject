import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView,Button, TouchableOpacity } from 'react-native';
import Card from './components/Card'

function App() {


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      <Card title="Falan" text="HAHAYT FALAN FİLAN İNTER MİLAN"/>
      
      </ScrollView>
      
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
