import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostsResponse } from '../model/types';
import { getApiUrl } from '@/shared/api/getApiUrl';

const API_URL = getApiUrl();

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, { limit: number; skip: number }>({
      query: ({ limit, skip }) => `posts?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
