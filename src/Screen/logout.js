// import React, { Component, useState } from "react";
// import { StyleSheet, TextInput ,View,TouchableOpacity,Text, Modal,Button, FlatList} from 'react-native';
// import axios from "axios";

//  const  LogOut=()=>{
//       [loggedInStatus,setLoggedInStatus] = useState(false)
  

//   const handleLogout=()=>{
//     // this.setState({
//     //   loggedInStatus: "NOT_LOGGED_IN"
//     // });
//     // this.props.history.push("/");
//     SetLoggedInStatus(loggedInStatus)
//   }

//   const handleLogoutClick =()=>{
//     axios
//       .delete("http://localhost:3000/logout", { withCredentials: true })
//       .then(response => {
//           console.log("logout",response)
//         handleLogout();
//       })
//       .catch(error => {
//         console.log("Logout error", error);
//       });
//   }
//     return (
//       <View>
//         <Text>Status: {this.props.loggedInStatus}</Text>
//         {/* <button
//           onClick={() => this.handleLogoutClick()}
//           className="btn btn-primary btn-sm"
//         >
//           Logout
//         </button> */}
       
//             <TouchableOpacity  onClick={() => handleLogoutClick()}>
//             <Text>Logout</Text>
//             </TouchableOpacity>
//       </View>
//     );
//   }
// export default LogOut;