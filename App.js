import React, { Component } from 'react'
import {View,Text,StatusBar,FlatList,TextInput,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo      :'',
      todoData  : [
        {title:'pergi ke pasar',status:'selesai'},
        {title:'mengerjakan tugas',status:'belum selesai'},
        {title:'makan siang',status:'selesai'},
        {title:'membersihkan halaman',status:'belum selesai'}
      ]
     };
  }
  check = (item,index) => {
    let allData = this.state.todoData;
    let editItem    = item;

    if(editItem.status == 'selesai') {

      editItem.status = 'belum selesai';

    }else{
      editItem.status = 'selesai';
    }

    allData[index].status = editItem.status;
    this.setState({
      todoData :allData
    })
  }

  delete = (index) => {
    let allData = this.state.todoData;
    allData.splice(index,1);
    this.setState({todoData:allData})
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#212121'}}>
        <StatusBar barStyle='light-content' backgroundColor="#272727"/>
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#303030',paddingVertical:15,elevation:3,marginBottom:20}}>
          <Text style={{color:'#fafafa',fontWeight:'bold'}}>Todo list</Text>
        </View>
      
        <FlatList
          data={this.state.todoData}
          renderItem={({item,index}) => (
            <View style={{justifyContent:'center', backgroundColor:'#303030',marginHorizontal:20,paddingVertical:10 ,paddingHorizontal:10,borderRadius:5,elevation:3,marginTop:10,flexDirection:'row'}}>
              <View style={{flex:1}}>
                <Text style={{color:'#ffffff'}}>{item.title}</Text>
              </View>
              <TouchableOpacity style={{justifyContent:'center'}} onPress={ () => this.delete(index)}>
                <Icon name={'trash-alt'} size={25} color="#fafafa" />
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent:'center',marginLeft:20}} onPress={()=> this.check(item,index)}>
                <Icon name={item.status == 'selesai' ? 'check-square' : 'square'} size={25} color="#fafafa" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.title}
          />
        <TextInput 
          value={this.state.todo} 
          onChangeText={(text) => this.setState({todo: text})}
          style={{backgroundColor:'#303030', paddingHorizontal:10,marginHorizontal:20,color:'#ffffff',marginBottom:20}}
          placeholder="add new task .."
          placeholderTextColor="grey" 
        />
      </View>
    );
  }
}

export default App;