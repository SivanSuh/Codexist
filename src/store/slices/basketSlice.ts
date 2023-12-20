import { createSlice } from "@reduxjs/toolkit";

interface INITIAL_STATE_PROPS {
    selectedBook: null | any;
    books:Array<any>
}

const initialState :INITIAL_STATE_PROPS = {
    selectedBook:null,
    books:[]
}

const basketSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        selectBook:(state,action) => {
            state.selectedBook = action.payload
        },
        addBasket: (state, action) => {
            console.log("action payload", action.payload);
            const findCardItem = state.books.find(items => items.id === action?.payload?.id)
           console.log("find card ",findCardItem)
            if (findCardItem) {
              console.log("find card", findCardItem.quantity);
              findCardItem.quantity = findCardItem.quantity + 1;
            } else {
              state.books.push(action.payload);
            }
          },
    }
})

export const { selectBook, addBasket}  = basketSlice.actions
export default basketSlice.reducer