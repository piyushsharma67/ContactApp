import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export interface Contact{
    name:string,
    phone:string,
    type:string,
    dp:string,
    isWhatsapp:boolean,
    id:string
}

interface initStateType{
    contacts:Contact[],
    isLoading:boolean,
    toastMessage:string,
    showToast:boolean,
    selectedContact:Contact
}

const initialState = {
  contacts:[],
  toastMessage:"",
  showToast:false,
  isLoading:false,
  selectedContact:{
    name:"",
    phone:"",
    type:"",
    dp:"",
    isWhatsapp:false,
    id:""
  }
} as initStateType


export const addContact = createAsyncThunk(
  'contact/addContact',
  async (dataToadd:Omit<Contact,"id">) => {

    return firestore()
    .collection("Contacts")
    .add(dataToadd)
    .then(async (res)=>{
      const snapshot = await firestore().collection('Contacts').get()
      const data= snapshot.docs.map(doc =>{return {id:doc.id,...doc.data()}}); 
      return data
    })
 
  }
);

export const refreshAllContacts = createAsyncThunk(
  'contact/refreshAllContacts',
  async () => {
    return firestore()
    .collection("Contacts")
    .get().then(res=>{
      const data= res.docs.map(doc =>{return {id:doc.id,...doc.data()}}); 
      return data
    })
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id:string) => {
    return firestore()
    .collection("Contacts")
    .doc(id)
    .delete()
    .then(async ()=>{
      const snapshot = await firestore().collection('Contacts').get()
      const data= snapshot.docs.map(doc =>{return {id:doc.id,...doc.data()}}); 
      return data
    })
  }
);

interface props{
  id:string,
  docs:Omit<Contact,"id" | 'dp'>
}

export const modifyContact = createAsyncThunk(
  'contact/modifyContact',
  async ({id,docs}:props) => {
    console.log("docs")
    return firestore()
    .collection("Contacts")
    .doc(id)
    .update({...docs})
    .then(async ()=>{
      const snapshot = await firestore().collection('Contacts').get()
      const data= snapshot.docs.map(doc =>{return {id:doc.id,...doc.data()}}); 
      return data
     
    })
  }
);



export const ContactRedcuer = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    hideToast:(state,action)=>{
      state.showToast=false,
      state.toastMessage=""
    },
    selectedContact:(state,action)=>{
      state.selectedContact={...action.payload}
    }
  },
  extraReducers: builder => {

    //Add contacts

    builder.addCase(addContact.pending,(state,action)=>{
      state.isLoading=true
    }),
    builder.addCase(addContact.fulfilled,(state,action)=>{
      state.isLoading=false
      //@ts-ignore
      state.contacts=action.payload
      state.showToast=true,
      state.toastMessage="user added"
    }),
    builder.addCase(addContact.rejected,(state,action)=>{
      state.isLoading=false
    }),


    //refresh contacts

    builder.addCase(refreshAllContacts.pending,(state,action)=>{
      state.isLoading=true
    }),
    builder.addCase(refreshAllContacts.fulfilled,(state,action)=>{
      state.isLoading=false
      //@ts-ignore
      state.contacts=action.payload
      state.showToast=true,
      state.toastMessage="Contacts Refreshed"
    }),
    builder.addCase(refreshAllContacts.rejected,(state,action)=>{
      state.isLoading=false
    }),

    //delete contact

    builder.addCase(deleteContact.pending,(state,action)=>{
      state.isLoading=true
    }),
    builder.addCase(deleteContact.fulfilled,(state,action)=>{
      state.isLoading=false
      //@ts-ignore
      state.contacts=action.payload
      state.showToast=true,
      state.toastMessage="Contact Deleted"
    }),
    builder.addCase(deleteContact.rejected,(state,action)=>{
      state.isLoading=false
    }),

    //delete contact
    builder.addCase(modifyContact.pending,(state,action)=>{
      state.isLoading=true
    }),
    builder.addCase(modifyContact.fulfilled,(state,action)=>{
      state.isLoading=false
      //@ts-ignore
      state.contacts=action.payload
      state.showToast=true,
      state.toastMessage="Contact Modified"
    }),
    builder.addCase(modifyContact.rejected,(state,action)=>{
      state.isLoading=false
    })


  },
});
export const {hideToast,selectedContact} = ContactRedcuer.actions;
export default ContactRedcuer.reducer;
