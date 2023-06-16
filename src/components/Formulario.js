import React from 'react'
import { Modal, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, View } from 'react-native'

const Formulario = (props) => {
  return (
    <Modal 
        animationType='slide' 
        visible={props.modalVisible}
    >
      <SafeAreaView style = {styles.contenido}>
        
        <ScrollView>

          <Text style={styles.titulo}> Nueva {''}
              <Text style = {styles.tituloBold}>Cita</Text>
          </Text>

          <View style={styles.campo}>
            <Text style={styles.label}> Nombre de Cliente</Text>
            <TextInput 
                style={styles.input}
                placeholder='Nombre de Cliente'
                placeholderTextColor={'#666'}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}> Correo Electrónico</Text>
            <TextInput 
                style={styles.input}
                placeholder='Correo Electrónico'
                placeholderTextColor={'#666'}
                keyboardType='email-address'
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}> Número de teléfono</Text>
            <TextInput 
                style={styles.input}
                placeholder='Número de teléfono'
                placeholderTextColor={'#666'}
                keyboardType='number-pad'
            />
          </View>

        </ScrollView>
        
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#FFF'
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
    fontWeight: '600'

  },
  input:{
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
  }

})

export default Formulario
