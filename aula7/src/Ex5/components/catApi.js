import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'live_tVnKZdHlLRSC96yqECYJ3KDQpuqbMe1HNBarlF0BXCEizJWaBSdicQvcdoJ0vnBv';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchCats: builder.query({
      query: (page) => `images/search?limit=5&page=${page}`,
    }),
  }),
});

export const { useFetchCatsQuery } = catApi;