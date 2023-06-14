import React from 'react'
import { 
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable
   } from 'react-native'

const App = () => {

  const nuevaCitaHandler = () =>{
    console.log('Presionaste el Botón')
  }

  return ( 
  <SafeAreaView style={styles.container}> 
    <Text style={styles.titulo}>
      Administrador de Citas {''}
      <Text style = {styles.tituloBold}>
        Soluciones David
      </Text>
    </Text>
    <Pressable style = {styles.btnNuevaCita}
      onPressOut={ nuevaCitaHandler }  
    >
      <Text style = {styles.btnTextoNuevaCita}>
        Nueva Cita
      </Text>
    </Pressable>
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
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginHorizontal: 20, 
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
})

export default App;


