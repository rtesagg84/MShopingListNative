import React ,{useEffect} from 'react';
import axios from 'axios';
import _ from 'lodash'
import { StyleSheet, TextInput ,View,TouchableOpacity,Text, Modal,Button, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Card } from 'react-native-paper';
import Storecard from '../Card/storecard'
import LogOut from "./logout";
import { useState } from 'react/cjs/react.development';

const price = [
{id: 1,'itemId':1 ,'storeId':2,'Price': 4 },
{id: 2,'itemId':1 ,'storeId':3,'Price': 2},
{id: 3,'itemId':3 ,'storeId':3,'Price': 2}
]

const Items = ({navigation,route}) =>{
  const { selected } = route.params;
  const [itemList,setItemList] =useState('');
  const [item ,setItem] =useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/items')
            .then((response) => {
                setItemList(response.data);
                // console.log("items",response.data)
            });
    },[]);

  //   useEffect(() => {
  //     axios.get('http://localhost:3000/prices')
  //         .then((response) => {
  //             // setItemList(response.data);
  //             console.log("prices",response.data)
  //         });
  // },[]);

  let filterdItem  = _.filter(itemList, (item) => item.isChecked);
 
    const handleChange = (id) => {
        let temp = itemList.map((item) => {
          if (id === item.id) {
            return { ...item, isChecked: !item.isChecked };
          }
          return item;
        });
        setItemList(temp);
      };
     
      const renderItemFlatList =  (<FlatList
        data={itemList}
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
                <Text>{item.Item_name}</Text>
              </View>
              </View>
          </Card>
        )}
      />)
  
 
      return (
        <View style={styles.container}>
          <Storecard selected={selected} filterdItem={filterdItem} price={price}/>
          <View style={{ flex: 1 }}>{renderItemFlatList}</View>
          
            <Button title='Add'/>
               
        </View> 
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        marginTop: 20,
      },
    
      card: {
        padding: 10,
        margin: 5,
      },
      input: {
        margin: 15,
        height: 30,
        width:250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
     },
      text: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom:200
      },
      searchbar:{
        borderColor:'red',
        flexDirection: 'row'
      }
    })
    export default Items;
