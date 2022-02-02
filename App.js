import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button ,TouchableOpacity} from 'react-native';


function App() {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>

        <View style={styles.card_body}>
          <Text style={styles.card_title}>Eddard Stark</Text>
          <Text style = {styles.card_text}>Winter is coming...</Text>
          <TouchableOpacity style={styles.card_button_container}>
            <Text style= {styles.card_text_color}>I LIKED</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',

  },

  card_container: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  }
  ,
  card_body: {
    padding: 0,
    

  },


  card_title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    marginBottom : 1,


  },
  card_text: {
    fontSize: 14,
    margin: 10,
    marginTop :3, 
  },
  card_button_container: {
    backgroundColor: 'blue',
    borderColor: 'white',
    borderBottomLeftRadius:10,
    alignItems : 'center',
    borderBottomRightRadius:10,
    padding: 10,


  }
  ,
  card_text_color: {
    color: 'white',
    
    borderColor: 'white',

    fontSize: 18,
    
  }



});
export default App;
