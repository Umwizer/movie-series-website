
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {apiUrl,tmdbAccessToken, tmdbApiKey} from '../utils'
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react'

export const tmdbMovie = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:`${apiUrl}/trends`}),
    endpoints:(builder) =>({
        getTrendingMovie:builder.query({
            query:()=>({
                url:`trending/movie/day?api_key=${tmdbApiKey}`,
            }),
        }),
    }),
});
export const {useGetTrendingMovieQuery} = tmdbMovie;