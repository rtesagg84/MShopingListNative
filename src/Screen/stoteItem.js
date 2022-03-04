import React, { useState } from "react";
import axios from "axios";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button ,TouchableOpacity ,TextInput} from "react-native";

const StoreItems = ({navigation}) => {
    const [values, setValues] = React.useState({ email: '', password: '',passwordConfirmation:"" });
    const [modalVisible, setModalVisible] = useState(true);
    const handleChange = (name, value) => {
        setValues({
          ...values,
          [name]: value,
        });
      };
      
    const handleSubmit= () =>{
       
        axios
          .post(
            "http://localhost:3000/users",
            {
              user: {
                email: values.email,
                password: values.password,
                password_confirmation: values.passwordConfirmation
              }
            },
            { withCredentials: true }
          )
          .then(response => {
              console.log("status",response.data.status)
            if (response.data.status === "created") {
              console.log("StoreItems data", response.data)
            }
          })
          .catch(error => {
            console.log("StoreItems error", error);
          });
    
        // event.preventDefault();
      }
  return (
    <View >
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
          </View>
        </View>
      </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalView: {
    margin: 40,
    height:400,
    width:350,
    backgroundColor: "#d6d8da",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttons: {
   flexDirection:'row',
    
},
  buttonOpen: {
    backgroundColor: 'green',
    padding: 10,
    margin: 15,
    height: 40,
    width:100,
    borderRadius: 5,
    justifyContent:'center',
  },
  buttonClose: {
    backgroundColor: 'green',
    padding: 10,
    margin: 15,
    height: 40,
    width:100,
    borderRadius: 5,
    justifyContent:'center',
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    margin: 15,
    height: 30,
    width:250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
 },
});


export default StoreItems;

