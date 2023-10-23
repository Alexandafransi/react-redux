import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";




const {reducer, actions} = createSlice({
    name: 'user',
    initialState: {
        loading:false,
        error: ''
    },

    reducers: {
        requested: (state, action) => ({...state, loading:true}),
        succeed: (state,action)=>({...state, loading:false, user:action.payload}),
        failed: (state,action)=>({...state, loading:true, error:action.payload})
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUser.fulfilled, (state,action) => ({...state, user: action.payload}))
    }
})

export default reducer

export const fetchUser =  createAsyncThunk('user/getUser', async(userId) => {
    const res =  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return await res.json();
})

// export const userSlice = actions

// export const getUser = (data)=>(dispatch)=>
// {
//     dispatch(actions.succeed(data))
// }

