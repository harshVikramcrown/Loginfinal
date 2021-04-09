import { StyleSheet} from "react-native";
export default StyleSheet.create({
    MainContainer:{
        flex:0.5,
        margin: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    Head:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor:'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
   
},
dotView: {
    marginBottom: -30,
    flexDirection: "row",
    justifyContent: "center",
},
line:{
    height:8,
    width:16,
    margin:8,
    backgroundColor:"white",
    borderRadius:4,
    bottom:20,
},
dot: {
    height: 8,
    width: 8,
    backgroundColor: "#fff",
    opacity:0.6,
    margin: 4,
    borderRadius: 5,
    bottom:17,
  },

Title:{
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
},
MainPrice:{
    color: "#9acd32",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8
},
Price:{
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "grey",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 12,
},
btn:{
    marginTop:-38,
    marginLeft:250,
    backgroundColor: "#0095ff",
    width: 100,
    height: 30,
    borderRadius: 5,
},
btnContainer:{ 
    marginTop:5,
    textAlign: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
   
    justifyContent:"center"
},
icons:{
    marginRight:35,
 borderBottomColor: "transparent",
 borderBottomWidth: 10,
 borderTopColor: "transparent",
 borderTopWidth: 1,
 flexDirection: "row",
 height: 80,
},
icon1:{
    margin: -10,
    width: "35%",
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "transparent",
    flexDirection: "row",
    borderRightWidth: 1,
},
iconText1:{
    fontSize: 20,
    color: "black",
    fontWeight: "normal",
    marginLeft: 10,
},
icons2:{
    margin: -10,
    width: "35%",
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "transparent",
    flexDirection: "row",
    borderRightWidth: 1,
},
iconText2:{
    fontSize: 20,
    color: "black",
    fontWeight: "normal",
    marginLeft: 10,
},
icons3:{
    margin: -10,
    width: "35%",
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "transparent",
    flexDirection: "row",
    borderRightWidth: 1,
},
iconText3:{
    fontSize: 20,
    color: "black",
    fontWeight: "normal",
    marginLeft: 10,
},
description:{
 flex:0.3,
    top:-20,

},
cont:{
     margin: 10,
     marginTop: 16,
     marginRight: 10,
     flexDirection: "row",
     marginBottom: 30,
},
cartBtn:{
    
    backgroundColor: "#9acd32",
    width:280,
    marginLeft: 20,
    borderRadius: 10
},
cartText:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
},
SimilarText:{
    fontSize:20,
    fontWeight:"bold",
    paddingHorizontal:20,
    top:-20,
    right:15,
},
checkOut:{
    backgroundColor: "#9acd32",
    width:350,
    flexDirection:"row",
    marginLeft: 5,
    borderRadius: 10,
    height:40,
    justifyContent:"center",
    textAlign:"center",
},
chkoutText:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 170,
    top:5,
},
chkoutleft:{
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
   top:5,
   marginLeft:-10,
}


});