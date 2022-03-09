import React ,{useEffect} from 'react';
import axios from 'axios';
import { StyleSheet, TextInput ,View,TouchableOpacity,Text, Modal,Button, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Card } from 'react-native-paper';
import LogOut from "./logout";

       
const FlatListItems =(listData)=>{
    
  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

const renderFlatList = (renderData) => {
    return (
                <FlatList
                    data={renderData}
                    renderItem={({ item }) => (
                    <Card style={{ margin: 5 }}>
                        <View style={styles.card}>
                        <View
                            style={{
                            flexDirection: 'row',
                            flex: 1,
                            justifyContent: 'space-between',
                            }}>
                            <CheckBox
                            value={item.isChecked}
                            onChange={() => {
                                handleChange(item.id);
                            }}
                            />
                            <Text>{item.txt}</Text>
                        </View>
                        </View>
                    </Card>
                    )}
                />
                );
            };
  return(
    <View style={styles.container}>
        <View style={{ flex: 1 }}>{renderFlatList(listData)}</View> 
    </View>
 )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      padding: 10,
      marginTop:40,
    },
  
    card: {
      padding: 10,
      margin: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      margin: 15,
      height: 30,
      width:250,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
   },
    // modalView: {
    //   margin: 20,
    //   backgroundColor: 'white',
    //   borderRadius: 20,
    //   padding: 5,
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   elevation: 5,
    // },
    text: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom:200
    },
    searchbar:{
      borderColor:'red',
      flexDirection: 'row'
    }
  });
export default FlatListItems;