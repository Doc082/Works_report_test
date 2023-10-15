import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIURL } from '../config'


export const AuthApi = createApi({
    tagTypes: ['AUTH'],
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: APIURL + '/auth',
        
    }),
    endpoints: builder => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body,
                headers: {
                    Accept: 'application/Json'
                },
                
            }),
        }),
        register: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body,
                headers: {
                    Accept: 'application/Json'
                }
            }),
        
        }),
    }),
});

export const {useLoginMutation, useRegisterMutation} = AuthApi;