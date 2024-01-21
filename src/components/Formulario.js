import React from 'react'
import { 
  Modal, 
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable, 
    } from 'react-native'

const Formulario = (props) => {
  return (
    <Modal 
        animationType='slide' 
        visible={props.modalVisible}
    >
      <SafeAreaView style={styles.container}>
        <Text style = {styles.titulo}>
          Nueva {' '}
          <Text style = {styles.tituloBold}>
             Cita
          </Text>
        </Text>
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
  }
})

export default Formulario
