import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { APIURL } from '../config'


export const clientApi = createApi({
    tagTypes: ['CLIENT'],
    reducerPath: 'client',
    baseQuery: fetchBaseQuery({
        baseUrl: APIURL,
        prepareHeaders: (headers, {getState}) =>{
            const token = getState().user.token;
            headers.set('Accept', 'application/json');
    
            if(token){
                headers.set('authorization', 'Bearer ' + token)
            }
            return headers;
        },
    }),
    endpoints: builder => ({
        getClient: builder.query({
            query: () => ({
                url: '/client',
            }),
            providesTags: ['CLIENT']
        }),
        deleteClient: builder.mutation({
            query: (id) => ({
                url: '/client/' + id,
                method: 'DELETE', 
            }),
            invalidatesTags: ['CLIENT']
        }),
        addClient: builder.mutation({
            query: (report) =>({
                url: '/client',
                method: 'POST',
                body: report,
            }),
            invalidatesTags: ['CLIENT']
        }),
        searchClient: builder.mutation({
            query: (report) =>({
                url: '/search_cli',
                method: 'POST',
                body: report,
            }),
            invalidatesTags: ['CLIENT']
        }),
        showClient: builder.mutation({
            query: (id) =>({
                url: '/client/' + id,
                method: 'GET',
            }),
            invalidatesTags: ['CLIENT']
        }),
        updateClient: builder.mutation({
            query: ({id, ...body}) => ({
                url: '/client/' + id,
                method: 'PATCH',
                body
            }),
            invalidatesTags:['CLIENT']
        })
    })

});

export const {useGetClientQuery, useDeleteClientMutation, useAddClientMutation, useSearchClientMutation, useShowClientMutation, useUpdateClientMutation} = clientApi;