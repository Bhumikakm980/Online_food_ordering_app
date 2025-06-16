import { createSlice,current } from "@reduxjs/toolkit";

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
            let valueToRemove=current(state);
            state.items= valueToRemove.items.filter((i)=>(i.card.info.id!=action.payload.card.info.id));
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
    }

});

export const {addItems,removeItems,clearCart}=cartSlice.actions;


export default cartSlice.reducer;