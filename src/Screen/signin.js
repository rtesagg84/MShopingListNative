import React, { useState } from 'react'
import { StyleSheet, TextInput ,View,TouchableOpacity,Text,Modal} from 'react-native';
import axios from 'axios';
import Registration from './registration'

const SingIn = ({navigation}) =>{
    const [currentUser,setCurentUser]= useState("")
    const [values, setValues] = React.useState({ email: '', password: '' });
    const [modalVisible, setModalVisible] = useState(false);

    const handleChange = (name, value) => {
      setValues({
        ...values,
        [name]: value,
      });
    };

   const onSubmit =() => {
      axios.post('http://localhost:3000/sessions', {login:{
         email:values.email,
         password: values.password
      }},
      { withCredentials: true }
      )
      .then(res => { 
        if(res.status === 200){
           navigation.navigate("Dashboard")
           setCurentUser(res.config.data)
         //   console.log(res)
        }
            
      })
      .catch(error => {
          console.log('error',error)
      });
        };

      return (
         <View style={styles.container}>
            <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email"
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  keyboardTyp="default"
                  onChangeText={(text) => handleChange('email', text)}
                  value={values.email}
                  />
               
               <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  placeholderTextColor = "#9a73ef"
                  onChangeText={(text) => handleChange('password', text)}
                  value={values.password}
                  autoCapitalize = "none"
                  />
            <View style={styles.buttons}>
               <TouchableOpacity
                  style = {styles.submitButton}
                   onPress = {() => onSubmit(values) }
                  >
                  <Text style = {styles.submitButtonText}> Login </Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={[styles.submitButton]}
                  onPress={() => navigation.navigate("Create an account")}
                >
                  <Text style={styles.submitButtonText}>SignUp</Text>
             </TouchableOpacity>
            </View>
               
       </View>
      )
}
export default SingIn

const styles = StyleSheet.create({
   container: {
      paddingTop:35,
      flex: 1,
      // justifyContent: "center",
      alignItems: "center",
   },
   input: {
      margin: 15,
      height: 30,
      width:250,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
   },
   submitButton: {
      backgroundColor: 'green',
      padding: 10,
      margin: 15,
      height: 40,
      width:100,
      borderRadius: 5,
      justifyContent:'center'
   },
   submitButtonText:{
      color: 'white',
      textAlign:'center',
      
   },
   buttons: {
      flexDirection:'row',   
   },
})
