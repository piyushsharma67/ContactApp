import React, { useEffect } from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../common_components/loader'
import Toast from '../../common_components/Toast/toast'
import { refreshAllContacts } from '../../redux/reducers/reducer'
import { RootState } from '../../redux/store/store'
import { width } from '../../utils/dimension'
import AddButton from './addButton'
import ListContact from './ListContacts'

const HomeScreen=()=>{
    const {isLoading}=useSelector((state:RootState)=>state.ContactReducer)
    const dispatch=useDispatch()

    useEffect(()=>{
        // @ts-ignore
        dispatch(refreshAllContacts())
    },[])

    
    return (
        <View style={style.container}>
            <Toast />
            <ListContact />
            <Loader loading={isLoading}/>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        justifyContent:'flex-start',alignItems:'center',width:width
    }
})

export default HomeScreen