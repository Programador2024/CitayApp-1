import React from 'react'
import { Modal, Text, SafeAreaView, StyleSheet } from 'react-native'

const Formulario = (props) => {
  return (
    <Modal 
        animationType='slide' 
        visible={props.modalVisible}
    >
      <SafeAreaView style = {styles.contenido}>
        <Text style={styles.titulo}> Nueva {''}
            <Text style = {styles.tituloBold}>Cita</Text>
        </Text>

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
  }

})

export default Formulario
