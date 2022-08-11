import React from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Switch } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import DropdownComponent from '../../common_components/dropDown/dropDownComponent'
import { addContact } from '../../redux/reducers/reducer'
import { width } from '../../utils/dimension'

const AddContactScreen=()=>{

    const [details,setDetails]=React.useState({
        phone:"",
        name:"",
        type:"",
        isWhatsapp:false,
    })
    const keys={
        PHONE:"phone",
        NAME:'name',
        TYPE:"type",
        ISWHATSAPP:"isWhatsapp"
    }

    function updatevalues(key:string,value?:string | boolean){
        
        if(key===keys.ISWHATSAPP){
            setDetails({...details,[key]:!details.isWhatsapp})
        }else {
            setDetails({...details,[key]:value})
        }
        
    }

    const dispatch=useDispatch()
   
    function submitt(){
        //@ts-ignore
        dispatch(addContact({name:details.name,type:details.type,phone:details.phone,isWhatsapp:details.isWhatsapp}))
    }

    return (
        <View style={style.container}>
            <View style={style.heading}>
                <Text style={{fontSize:17,color:'black'}}>Please fill the following details to add contact</Text>
            </View>
            <View style={style.details}>
                <View style={{width:'90%',marginVertical:10}}>
                    <TextInput 
                    style={style.input}
                    value={details.name}
                    placeholder={keys.NAME}
                    onChangeText={(value=>updatevalues(keys.NAME,value))}
                    />
                </View>
                <View style={{width:'90%',marginVertical:10}}>
                    <TextInput 
                    style={style.input}
                    value={details.phone}
                    placeholder={keys.PHONE}
                    keyboardType="number-pad"
                    maxLength={10}
                    onChangeText={(value=>updatevalues(keys.PHONE,value))}
                    />
                </View>
                <View style={{width:'90%',marginVertical:10}}>
                    <DropdownComponent label="Select contact type" onPress={updatevalues} keyType={keys.TYPE}/>
                </View>
                <View style={{width:'90%',marginVertical:10,flexDirection:'row'}}>
                    <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={style.text}>IsWhatsApp</Text>
                    </View>
                    <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                        <Switch value={details.isWhatsapp} onValueChange={()=>updatevalues(keys.ISWHATSAPP)}/>
                    </View>
                </View>

            </View>
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button} onPress={submitt}>
                    <Text style={{fontSize:18,color:'white'}}>Add Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    },
    heading:{
        flex:1,justifyContent:'center',alignItems:'center',width:width
    },
    details:{
        flex:8,justifyContent:'flex-start',alignItems:'center',width:width
    },
    input:{fontSize:16,width:'100%',justifyContent:'center',alignItems:'center',paddingLeft:10,borderWidth:1,height:50,borderRadius:7},
    buttonContainer:{flex:0.5,justifyContent:'center',alignItems:'center',width:'50%',alignSelf:'center',marginBottom:20},
    button:{flex:1,width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'purple'},
    text:{fontSize:16,color:'purple'}
})

export default AddContactScreen