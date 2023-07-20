import {CategoriesInterface} from "@/interfaces/categoriesInterface";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";

const initialState: CategoriesInterface = {
    categoriesList:[{
        key: 'all',
        name: 'Всё',
    },
        {
        key: 'smartphones',
        name: 'Телефоны',
    }, {
        key: 'laptops',
        name: 'Ноутбуки',
    }, {
        key: 'fragrances',
        name: 'Парфюмы',
    }, {
        key: 'skincare',
        name: 'Уход за кожей',
    }, {
        key: 'groceries',
        name: 'Продукты',
    }, {
        key: 'home-decoration',
        name: 'Украшения для дома',
    },
    ]
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        updateCategories:(state, action)=>{
            state.categoriesList = action.payload;
        }

    }
})

export const { actions, reducer} = categoriesSlice
export const selectCategories = (state: RootState) => state.categories
export default categoriesSlice.reducer