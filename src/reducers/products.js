import { createSlice} from '@reduxjs/tolkit'

const productData = [
{ id: 1, title: 'Socks', price:100, emoji:'🧦'},
{ id: 1, title: 'T-shirt', price:200, emoji:'👕'},
{ id: 1, title: 'Pants', price:350, emoji:'👖'},
{ id: 1, title: 'Dress', price:550, emoji:'👗'}
]

export const products = createSlice({
name:'products',
initialState:productData

})