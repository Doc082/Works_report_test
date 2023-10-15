import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { APIURL } from '../config'


export const reportApi = createApi({
    tagTypes: ['REPORT'],
    reducerPath: 'report',
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
        getReport: builder.query({
            query: () => ({
                url: '/report',
            }),
            providesTags: ['REPORT']
        }),
        deleteReport: builder.mutation({
            query: (id) => ({
                url: '/report/' + id,
                method: 'DELETE', 
            }),
            invalidatesTags: ['REPORT']
        }),
        addReport: builder.mutation({
            query: (report) =>({
                url: '/report',
                method: 'POST',
                body: report,
            }),
            invalidatesTags: ['REPORT']
        }),
        updateReport: builder.mutation({
            query: ({id, ...body}) => ({
                url: '/report/' + id,
                method: 'PATCH',
                body
            }),
            invalidatesTags:['REPORT']
        }),
        showReport: builder.mutation({
            query: (report) =>({
                url: '/show_date',
                method: 'POST',
                body: report,
            }),
            invalidatesTags: ['REPORT']
        }),
        showCliReport: builder.mutation({
            query: (report) =>({
                url: '/show_report',
                method: 'POST',
                body: report,
            }),
            invalidatesTags: ['REPORT']
        }),
        sendMail: builder.mutation({
            query: (report) =>({
                url: '/send_mail',
                method: 'POST',
                body: report,
            }),
            invalidatesTags: ['REPORT']
        }),
    })

});

export const {useGetReportQuery, useDeleteReportMutation, useAddReportMutation, useUpdateReportMutation, useShowReportMutation, useShowCliReportMutation, useSendMailMutation} = reportApi;