import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../configs';

export const ApiSlice = createApi({
  reducerPath: 'ApiStates',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: async headers => {
      headers.set('Content-Type', 'multipart/form-data');
      return headers;
    },
  }),
  endpoints: () => ({}),
});
