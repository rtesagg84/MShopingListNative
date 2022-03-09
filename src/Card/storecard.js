import React  from "react";
import _ from 'lodash'
import { StyleSheet, TextInput ,View,TouchableOpacity,Text, Modal,Button, FlatList} from 'react-native';
import { Card } from 'react-native-paper';

const StoreCard = (props) =>{
    const selectedStore = props.selected;
    const filterdItem = props.filterdItem;
    const price = props.price;
    let itemprice =''
    let itemName = "";
    const filterdItem44 =  filterdItem.map(item =>{
      console.log("item name" ,item.Item_name)
     itemprice = price[item.id];
     itemName= item.Item_name;
    })
console.log("filterdItem44",itemprice)
    return(
  <View>{selectedStore  && selectedStore .map(store=>{
      //  const itemlowestprice =_find(itemprice,i=>)
      const xx = (store.id === itemprice.storeId)? itemprice.Price:'out'
        return(
        <Card style={{ margin: 5 }}>
        <View style={styles.card}>
        <Text style={styles.text}>{store.name}</Text>
        <Text>{itemName}    ${xx}</Text>
        </View>
        </Card>
       )
      })}</View>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
     
    },
  
    card: {
      padding: 10,
      margin: 5,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    
    text: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize:23,
      marginBottom:20,
    },

    addButtones:{
      color:'green'
    }})
 export default StoreCard;