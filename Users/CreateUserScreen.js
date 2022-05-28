import React, {useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native'

import firebase from './database/firebase'

const CreateUserScreen = () =>{
    const [state, setState] = useState({
      name: "",
      email: ""
    })

    const handleChangeText = (name, value) =>{
      setState({ ...state, [name]: value });
    }

    const saveNewUser = async () => {
      await firebase.db.collection('users').add({
        name: state.name,
        email: state.email
      })
      alert('saved');
    }

  return (
    <ScrollView>
      <View>
        <TextInput placeholder='Nombre de Usuario' onChangeText={(value) => handleChangeText('name',value)}/>
      </View>
      <View>
        <TextInput placeholder='Contrasena' onChangeText={(value) => handleChangeText('email',value)}/>
      </View>
      <View>
        <Button title="HOLA" onPress={() =>saveNewUser()}/>
      </View>
    </ScrollView>
    
  )
}

export default CreateUserScreen