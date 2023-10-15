import { createSlice } from "@reduxjs/toolkit";


let initialState = null;
const userData = localStorage.getItem('user-data');

if(userData){
    const data = JSON.parse(userData);
    if(data && data.access_token){
        const token = JSON.parse(window.atob(data.access_token.split('.')[1]));
        const expDate = new Date(token.exp * 1000);
        if(expDate < (new Date())) {
            localStorage.removeItem('user-data');
        }else {
            initialState = {
                name: data.name,
                email:data.email,
                token: data.access_token,
            }
        }
    } 
}

const UserLoggedSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        userLoggedIn(state, action){
            const data = action.payload;
            if(data && data.name){
                localStorage.setItem('user-data', JSON.stringify(data));
               
                state = {
                name: data.name, 
                email: data.email,
                token: data.access_token
                }; 
                
            }else {
                state=null;
            }
            return state;
        },
        userLogOut(state,action){
            localStorage.removeItem('user-data');
            state=null;
            return state;
        },
        userRegistered(state, action){
            const data = action.payload;
            if(data && data.name){
               state = {
                name: data.name,
                email: data.email,
                token: data.access_token
            }; 
            }else {
                state=null;
            }
            return state;
        },
    }

});

const {reducer, actions} = UserLoggedSlice;

export default reducer;
export const {userLoggedIn, userLogOut, userRegistered} = actions;