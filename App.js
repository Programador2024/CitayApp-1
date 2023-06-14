import React from 'react'
import { 
  SafeAreaView,
  Text,
  StyleSheet
   } from 'react-native'

const App = () => {
  return ( 
  <SafeAreaView style={styles.container}> 
    <Text style={styles.titulo}>
      Administrador de Citas {''}
      <Text style = {styles.tituloBold}>
        Soluciones David
      </Text>
    </Text>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo:{
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '800',
    color: '#6D28D9'
  }
})

export default App;


