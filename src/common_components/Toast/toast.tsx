import React, { useEffect } from "react";
import { View, StyleSheet, ToastAndroid} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { hideToast } from "../../redux/reducers/reducer";
import { RootState } from "../../redux/store/store";


const Toast = () => {

  const {toastMessage,showToast}=useSelector((state:RootState)=>state.ContactReducer)
const dispatch=useDispatch()
  useEffect(()=>{
    if(showToast){
      setTimeout(()=>{
        //@ts-ignore
        dispatch(hideToast())
      },2000)
    }
  },[showToast])
  
  if (showToast) {
    ToastAndroid.showWithGravityAndOffset(
      toastMessage,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      25,
      50
    );
    return null;
  }
  return null;
};

export default Toast