import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getApiUrl } from './getApiUrl';

const API_URL = getApiUrl();

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ limit, skip }) => `posts?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
