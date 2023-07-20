import { OrdersInterface, Product } from "@/interfaces/ordersInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

// Define the type for the 'el' parameter inside the for-of loop
type OrderWithProducts = {
    id: number;
    type: string;
    title: string;
    number: number;
    date: string;
    price: number;
    checked: boolean;
    products: Product[]; // Assuming 'Product' is the correct type for products
};

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
    name: "orders",
    initialState,
    reducers: {
        deleteOrder: (state, action: PayloadAction<number>) => {
            try {
                state.currentOrders = state.currentOrders.filter(
                    (el) => el.id !== action.payload
                );
            } catch (e) {
                console.log(e);
            }
        },
        updateOrders: (state) => {
            try {
                state.currentOrders = state.orders;
            } catch (e) {
                console.log(e);
            }
        },
        setChecked: (state, action: PayloadAction<{ id?: number; collapse?: boolean }>) => {
            try {
                for (const el of state.orders as OrderWithProducts[]) { // Cast 'state.orders' to the correct type
                    if (!el.checked && el.id === action.payload.id) {
                        el.checked = true;
                        state.activeProducts = JSON.parse(JSON.stringify(el));
                    } else {
                        if (action.payload.collapse === true) {
                            el.checked = false;
                        }
                        el.checked = false;
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        deleteActiveProduct: (state, action: PayloadAction<number>) => {
            try {
                if (state.activeProducts) {
                    // @ts-ignore
                    state.activeProducts.products = state.activeProducts.products.filter(
                        (el:any) => el && el.id !== action.payload
                    );
                }
            } catch (e) {
                console.log(e);
            }
        },
    },
});

export const { actions, reducer } = ordersSlice;
export const selectOrders = (state: RootState) => state.orders;
export default ordersSlice.reducer;