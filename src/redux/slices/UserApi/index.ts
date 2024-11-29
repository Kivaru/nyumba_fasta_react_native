import {ApiSlice} from '../ApiSlice';
import {UserProfileResponse} from '../../types/authDataTypes';

export const UserApiSlice = ApiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserProfile: builder.query({
      query: id => `/get/user/profile/${id}`,
      transformResponse: (response: UserProfileResponse) => response,
    }),
  }),
  overrideExisting: true,
});

export const {usePrefetch, useGetUserProfileQuery} = UserApiSlice;
