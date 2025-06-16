import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({

    name:"cart",

    initialState:{
        items:[],
    },

    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            // state.items.pop();
            state.items.remove(action.payload.card.info.id);
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }

});

export const {addItems,removeItems,clearCart}=cartSlice.actions;


export default cartSlice.reducer;