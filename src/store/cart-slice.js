
import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
    items: [],
    numberOfItems: 0,
    totalAmount: 0,
    userInfo: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalAmount = state.totalAmount + newItem.quantity * newItem.price;
            if (!existingItem) {
                const totalPrice = newItem.quantity * newItem.price;
                state.numberOfItems = state.numberOfItems + newItem.quantity;
                state.items.push({
                    name: newItem.name,
                    price: newItem.price,
                    totalPrice: totalPrice,
                    quantity: newItem.quantity,
                    image: newItem.image,
                    id: newItem.id,
                })
            } else {
                existingItem.quantity++;
                state.numberOfItems++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.numberOfItems--;
            state.totalAmount = state.totalAmount - existingItem.price;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        removeItemSectionFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalAmount = state.totalAmount - existingItem.totalPrice;
            state.numberOfItems = state.numberOfItems - existingItem.quantity;
            state.items = state.items.filter(item => item.id !== id);
        },
        clearCart(state) {
            state.items = [];
            state.totalAmount = 0;
            state.numberOfItems = 0;
        },
        addUserDataToCart(state, payload) {
            const userData = payload.action;
            state.userInfo = userData;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;