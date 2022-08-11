import React from 'react'
import {View,Text,Image,StyleSheet, TouchableOpacity} from 'react-native'
import { Contact, deleteContact, selectedContact } from '../../../redux/reducers/reducer'
import { width } from '../../../utils/dimension'
import { theme } from '../../../utils/theme'
import {Icon} from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import callNumber from '../../../utils/callNumber'

interface Prop{
    item:Contact
}

function ContactCard(prop:Prop){

    const {item}=prop

    const dispatch=useDispatch()

    function deleteContactFromDB(id:string){
        //@ts-ignore
        dispatch(deleteContact(id))
    }

    const navigation=useNavigation()

    
    return (
        <TouchableOpacity style={style.container} onPress={()=>{
           
            dispatch(selectedContact(item))
            //@ts-ignore
            navigation.navigate("EditScreen")
            }}>
            <View style={style.image}>
                <Image source={require('../../../../assets/img264.jpg')} resizeMode="contain" style={{width:70,height:70,borderRadius:40,borderWidth:1}}/>
            </View>
            <View style={style.details}>
                <Text style={style.text}>{item.name}</Text>
                <View style={style.phoneNumber}>
                    <Text  style={style.text}>{item.phone}</Text>
                    <TouchableOpacity onPress={()=>callNumber(item.phone)}>
                        <Icon name="phone-call" type="feather" tvParallaxProperties size={theme.iconSizeMedium} color="purple"/>
                    </TouchableOpacity>
                </View>
                <Text style={style.text}>{item.type}</Text>
            </View>
            <TouchableOpacity style={{width:'23%',justifyContent:'center',alignItems:'center'}} onPress={()=>deleteContactFromDB(item.id)}>
                <Icon name="trash" type="feather" tvParallaxProperties size={theme.iconSizeMedium} color="red"/>
            </TouchableOpacity>
        </TouchableOpacity>
    )

}

const style=StyleSheet.create({
    container:{
        width:'100%',
        borderRadius:10,
        elevation:5,
        zIndex:5,
        shadowColor:'grey',
        backgroundColor:'white',
        shadowRadius:5,
        shadowOffset:{
            width:20,
            height:10
        },
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flex:1,
        marginVertical:10,alignSelf:'center'
    },
    image:{
        width:'22%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        
    },
    details:{
        width:'40%',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingVertical:10,
        
    },
    text:{
        fontSize:theme.headingFont,
        color:theme.textColor
    },
    phoneNumber:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    }
})

export default ContactCard

 //    paddingVertical:15,
    //    paddingHorizontal:10,
    // width:'90%',
    // borderRadius:10,
    // elevation:10,
    // zIndex:3,
    // shadowColor:'grey',
    // backgroundColor:'yellow',
    // shadowRadius:5,
    // shadowOffset:{
    //  width:10,
    //  height:10
    // },
    // flexDirection:'row',
    // justifyContent:'space-between',
    // alignItems:'center',
    // borderWidth:1,
    // flex:1
