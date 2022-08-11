import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/rootStackparam List';
import HomeScreen from '../../screens/homeScreen';
import AddContactScreen from '../../screens/addContactScreen';
import EditScreen from '../../screens/editScreen';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import HeaderRight from '../../common_components/headerComponents/homeScreenHeaderRight/headerRight';
import { useDispatch } from 'react-redux';
import { refreshAllContacts } from '../../redux/reducers/reducer';
import { useAppDispatch } from '../../redux/store/store';

const Stack = createNativeStackNavigator<RootStackParamList>();


const RootNavigationStack=()=>{

    const dispatch=useAppDispatch()
    
    function RefetchAllContacts(){
        //@ts-ignore
        dispatch(refreshAllContacts())
    }

    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
                headerRight:()=>{
                    return (
                        <HeaderRight name="refresh-cw" color="green" onPress={RefetchAllContacts} isHome={true}/>
                    )
                }
            }}/>
            <Stack.Screen name="AddScreen" component={AddContactScreen} />
            <Stack.Screen name="EditScreen" component={EditScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigationStack