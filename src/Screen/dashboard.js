import React, { useEffect ,useState} from "react";
import axios from "axios";
import _ from 'lodash'
import { StyleSheet, TextInput ,View,TouchableOpacity,Text, Modal,Button, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Card } from 'react-native-paper';
import LogOut from "./logout";
import Items from "./items";

// import Constants from 'expo-constants';

// You can import from local files
 //import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';v
 const ListStors = ({navigation}) => {
  const [storeLists, setStoreList] = useState([]);
  const [text, setText] = useState('');
  const[filterdStore,SetFilterdStore] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3000/stores')
        .then(response => {
          const storeArray = response.data.map((store,index) =>({
            id:store.id,
            name:store.name,
            isChecked:false,
            Miles:5
          }))
          setStoreList(storeArray)
        })
  },[]);

  const onSearch = ()=>{ 
const filterdstores1 = _.filter(storeLists, (store) => store.Miles <= text);
setStoreList(filterdstores1);
};
 
 const handleChange = (id) => {
  let temp = storeLists.map((storeList) => {
    if (id === storeList.id) {
      return { ...storeList, isChecked: !storeList.isChecked };
    }
    return storeList;
  });
  setStoreList(temp);
};

// const storesRendered = filterdStore && filterdStore.length ? filterdStore :storeLists;
  let selected = storeLists.filter((storeList) => storeList.isChecked);
  
  const renderFlatList =  (<FlatList
        data={storeLists}
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
                <Text>{item.name}</Text>
              </View>
              </View>
          </Card>
        )}
      />)
  
 

  return (
    <View style={styles.container}>
       <View style={styles.searchbar}>
        <TextInput 
            style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "search neer by Srore"
            placeholderTextColor = "#9a73ef"
            autoCapitalize = "none"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
          <Button title="Search" onPress={()=>onSearch()}></Button>
          </View>
            <View style={{ flex: 1 }}>{renderFlatList}</View>
            <Button title ="Add" style={styles.addButtones} selected={selected} onPress={() => navigation.navigate("Items",{selected:selected})}/>
            {/* <TouchableOpacity   selected={selected}>
            <Text>LogOut</Text>
            </TouchableOpacity> */}
            {/* <LogOut/> */}

      {/* <View style={{ flex: 1 }}>{renderFlatList(selected)}</View> */}
 
    </View> 
  );
};

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
    flexDirection: 'row',
   justifyContent:'center',
  },
  addButtones:{
    color:'green'
  }
});
export default ListStors;
