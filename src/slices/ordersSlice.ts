import {OrdersInterface} from "@/interfaces/ordersInterface";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";
import {act} from "react-dom/test-utils";

const initialState: OrdersInterface = {
    orders: [
        {
            id: 0,
            type: 'order',
            title: "Длинное предлинное длиннючее название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1235,
            checked: false,
            products:[
                {
                id: 1,
                title:"iPhone 9",
                image: "https://i.dummyjson.com/data/products/1/1.jpg",
            },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
        {
            id: 1,
            type: 'order',
            title: "Длинное название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1345,
            checked: false,
            products:[
                {
                    id: 1,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
        {
            id: 2,
            type: 'order',
            title: "Длинное предлинное длиннючее название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1287,
            checked: false,
            products:[
                {
                id: 1,
                title:"iPhone 9",
                image: "https://i.dummyjson.com/data/products/1/1.jpg",
            },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
        {
            id: 3,
            type: 'order',
            title: "Длинное предлинное название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1185,
            checked: false,
            products:[
                {
                id: 1,
                title:"iPhone 9",
                image: "https://i.dummyjson.com/data/products/1/1.jpg",
            },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
    ],
    currentOrders: [
        {
            id: 0,
            type: 'order',
            title: "Длинное предлинное длиннючее название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1235,
            checked: false,
            products:[
                {
                    id: 1,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
        {
            id: 1,
            type: 'order',
            title: "Длинное название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1345,
            checked: false,
            products:[
                {
                    id: 1,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
        {
            id: 2,
            type: 'order',
            title: "Длинное предлинное длиннючее название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1287,
            checked: false,
            products:[
                {
                    id: 1,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
        {
            id: 3,
            type: 'order',
            title: "Длинное предлинное название прихода",
            number: 30,
            date: '06/Сен/2017',
            price: 1185,
            checked: false,
            products:[
                {
                    id: 1,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 2,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },{
                    id: 3,
                    title:"iPhone 9",
                    image: "https://i.dummyjson.com/data/products/1/1.jpg",
                },
            ],
        },
    ],
    checkedOrders: [],
    activeProducts: [],
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        deleteOrder: (state, action) => {
            try {
                state.currentOrders = state.currentOrders.filter(el => el.id !== action.payload);
            } catch (e) {
                console.log(e);
            }
        },
        updateOrders: (state, action) => {
            try {
                state.currentOrders = state.orders;

            } catch (e) {
                console.log(e)
            }

        },
        setChecked:(state, action)=>{
            try {
                    for(const el of state.orders){

                        if(!el.checked && el.id === action.payload.id){
                            el.checked = true;
                            state.activeProducts = JSON.parse(JSON.stringify(el));
                        }
                        else{
                            if(el.collapse === true){
                                el.checked = false;
                            }
                            el.checked = false;
                        }
                    }

            }
            catch (e){
                console.log(e)
            }
        },
        deleteActiveProduct: (state, action) => {
            try {
                state.activeProducts.products = state.activeProducts.products.filter(el => el.id !== action.payload);
            }
            catch (e) {
                console.log(e);
            }
        },
    }
})

export const {actions, reducer} = ordersSlice
export const selectOrders = (state: RootState) => state.orders
export default ordersSlice.reducer