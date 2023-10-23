import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const {reducer, actions} = createSlice({
    name: 'product',
    initialState: {
        loading:false,
        error: '',
        product: null

    },

    reducers: {
        requested: (state, action) => ({...state, loading:true}),
        succeed: (state,action)=>({...state, loading:false, product:action.payload}),
        failed: (state,action)=>({...state, loading:true, product:null, error:action.payload})
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.fulfilled, (state,action) => ({...state, product: action.payload}))
    }
})

export default reducer

export const fetchProduct =  createAsyncThunk('product/getProduct', async(productId) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/todos/${productId}`)
    return await res.json();
})


