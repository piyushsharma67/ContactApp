import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import { Icon } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/reducers/reducer';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types/rootStackparam List';


function AddButton(){

    const navigation=useNavigation()
    const dispatch=useDispatch()
    
    return (
        //@ts-ignore
        <TouchableOpacity style={style.container} onPress={()=>
            //@ts-ignore
           dispatch(addContact({name:"funky",phone:"34234",isWhatsapp:false,dp:"",type:'office'}))
        
        }>
            <Icon name="plus" type="feather" tvParallaxProperties size={20} color="white"/>
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    container:{
        position:'absolute',
        right:15,
        bottom:15,
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'green'
    }
})

export default AddButton