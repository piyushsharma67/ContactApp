import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import {Icon} from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { refreshAllContacts } from '../../../redux/reducers/reducer'

interface prop{
    name:string,
    color:string,
    onPress?:()=>void,
    isHome:boolean
}

function HeaderRight({name,color,onPress,isHome}:prop){
    
    const navigation=useNavigation()    
   
    return (
        <View style={[style.container,{justifyContent:isHome ? 'space-between' : "center"}]} >
            <TouchableOpacity style={style.iconContainer} onPress={onPress}>
                <Icon name={name} type="feather" tvParallaxProperties size={20} color={color}/>
            </TouchableOpacity>
            
            {isHome && <TouchableOpacity style={style.iconContainer} onPress={()=>
                //@ts-ignore
                navigation.navigate('AddScreen')
                }>
                <Icon name="plus" type="feather" tvParallaxProperties size={25} color="blue"/>
            </TouchableOpacity>}
        </View>
    )
}

const style=StyleSheet.create({
    iconContainer:{
        width:"50%",justifyContent:'center',alignItems:'center'
    },
    container:{
        flexDirection:'row',width:100,alignItems:'center'
    }
})

export default HeaderRight