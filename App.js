import React, {useState} from 'react'
import { Platform, StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native-web';
import Task from "./components/Tasks"

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask=()=>{
    Keyboard.dismiss()
    setTaskItems([...taskItems,task])
    setTask(null)
  }

  const completeTask=(index)=>{
    let itemsCopy=[...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrapper}>
        <Text style = {styles.sectionTitle}>
          Today's Tasks
          </Text>
          <View style = {styles.items}>
            {
              taskItems.map((item, index)=>{
                return(
                  <TouchableOpacity
                  key= {index}
                  onPress={()=> completeTask(index)}
                  >
                    <Task text={item}/>
                  </TouchableOpacity>
                )
              })
            }
            </View>
        </View>
            <KeyboardAvoidingView
              behavior={Platform.OS==='ios'? "padding":"height"}
              style={styles.writeTaskWrapper}>
                <TextInput
                style={styles.input}
                  placeholder={'enter a task'}
                  value={task}
                  onChangeText={text=>setTask(text)}
                />
                <TouchableOpacity onPress={()=>handleAddTask()}>
                  <View style={styles.addWrapper}>
                    <Text styles={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>
                </KeyboardAvoidingView>
    </View>
  );
}


const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    maxWidth:250,
    marginHorizontal:15,
    backgroundColor:"white",
    borderRadius:60,
    borderColor:'#c0c0c0',
    boderWidth:1,
    textAlign:"center"
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'white',
    boderRadius:60,
    justifyContent:"center",
    alignItems:'center',
    boderColor:"#c0c0c0",
    boderWidth:1
  },
  addText:{
    fontSize:40,
    fontWeight:"bold"
  }
  

  
})