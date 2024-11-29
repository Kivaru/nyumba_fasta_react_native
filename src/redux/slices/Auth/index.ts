import {LoginResponse, RegisterResponse} from '../../types/authDataTypes';
import {ApiSlice} from '../ApiSlice';

export const AuthSlice = ApiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/user/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: LoginResponse) => response,
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/user/register',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: RegisterResponse) => response,
    }),
  }),
  overrideExisting: true,
});

export const {usePrefetch, useLoginMutation, useRegisterMutation} = AuthSlice;
