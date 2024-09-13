
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<{ products: any[] }, { limit: number, skip: number }>({
            query: ({ limit, skip }) => `products?limit=${limit}&skip=${skip}`,
        }),

    }),
});

export const { useGetProductsQuery } = productApi;
