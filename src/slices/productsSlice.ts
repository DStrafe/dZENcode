import {ProductsInterface} from "@/interfaces/productsInterface";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";

const initialState: ProductsInterface ={
    products: [],
    currentProducts: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        chooseCategory:(state, action)=>{
            try {
                if(action.payload === 'all'){
                    state.currentProducts = state.products.filter(el=> el.category !== action.payload);
                    return
                }
                state.currentProducts = state.products.filter(el=> el.category === action.payload)
            }catch (e) {
                console.log(e)
            }

        },
        deleteProduct:(state, action)=>{
            try{
                state.currentProducts = state.currentProducts.filter(el=> el.id !== action.payload);
            }catch (e) {
                console.log(e);
            }
        },
        updateProducts:(state, action)=>{
            try{
                state.products = action.payload;
                state.currentProducts = action.payload;
            }catch (e) {
            console.log(e)
        }

        },

    }
})

export const { actions, reducer} = productsSlice
export const selectProducts = (state: RootState) => state.products
export default productsSlice.reducer