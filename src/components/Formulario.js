import React from 'react'
import { 
  Modal, 
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView, 
  TextInput,
  View,
    } from 'react-native'

const Formulario = (props) => {
  return (
    <Modal 
        animationType='slide' 
        visible={props.modalVisible}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style = {styles.titulo}>
            Nueva {' '}
            <Text style = {styles.tituloBold}>
              Cita
            </Text>
          </Text>

          <View style = {styles.campo}>
            <Text style = {styles.label}>Nombre de Cliente</Text>  
            <TextInput 
              style = {styles.input}
              placeholder='Nombre de Cliente'
              placeholderTextColor={'#666'} 
              />
          </View>

          <View style = {styles.campo}>
            <Text style = {styles.label}>Número de Teléfono</Text>  
            <TextInput 
              style = {styles.input}
              placeholder='ej. 4451129334'
              placeholderTextColor={'#666'} 
              keyboardType='number-pad'
              />
          </View>

          <View style = {styles.campo}>
            <Text style = {styles.label}>Correo electrónico</Text>  
            <TextInput 
              style = {styles.input}
              placeholder='ej. correo@gmail.com'
              placeholderTextColor={'#666'} 
              keyboardType='email-address'
              />
          </View>
        </ScrollView>
        

      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#6D28D9',
    flex: 1
  },
  titulo:{
    color: '#FFF',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30
  },
  tituloBold: {
    fontWeight: '900'
  },
  campo:{
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  }
})

export default Formulario
