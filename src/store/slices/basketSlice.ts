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
          removeBasket: (state, action) => {
            const findCardItem = state.books.find(
              (item) => item?.id === action?.payload?.id
            );
      
            if (findCardItem.quantity === 1) {
              const index = state.books.findIndex((ites) => ites.id === action.payload.id);
              console.log("siline id",index)
              state.books.splice(index,1)
            } else {
              findCardItem.quantity--;
            }
          }
    }
})

export const { selectBook, addBasket ,removeBasket}  = basketSlice.actions
export default basketSlice.reducer