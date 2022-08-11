import React from 'react'
import { FlatList ,StyleSheet,View} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { width } from '../../utils/dimension'
import ContactCard from './components/contactCard'


function ListContact(){

    const {contacts}=useSelector((state:RootState)=>state.ContactReducer)

    return (
       <View style={style.container}>
           <View style={{width:'95%',alignSelf:'center'}}>
                <FlatList 
                    data={contacts}
                    keyExtractor={(item)=>item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>{
                        return (
                        <View style={{width:'100%',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                                <ContactCard item={item}/>
                            </View>
                        )
                    }}
                />
           </View>
       </View>
    )
}

const style=StyleSheet.create({
    container:{
        width:'100%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ListContact