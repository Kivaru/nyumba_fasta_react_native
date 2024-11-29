import {ApiSlice} from '../ApiSlice';
import {House, HouseForSaleResponse} from '../../types/houseApiDataTypes';

export const HouseApiSlice = ApiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllHouses: builder.query<House[], {}>({
      query: () => '/all-houses',
      transformResponse: (houses: House[]) => houses,
    }),
    getFavoriteHouses: builder.query({
      query: userId => `/favorite-houses/${userId}`,
      transformResponse: (houses: House[]) => houses,
    }),
    getHousesForRent: builder.query<House[], {}>({
      query: () => '/houses',
      transformResponse: (houses: House[]) => houses,
    }),
    getHousesForSale: builder.query<HouseForSaleResponse, {}>({
      query: () => '/houses-for-sale',
      transformResponse: (houses: HouseForSaleResponse) => houses,
    }),
  }),
  overrideExisting: true,
});

export const {
  usePrefetch,
  useGetAllHousesQuery,
  useGetFavoriteHousesQuery,
  useGetHousesForRentQuery,
  useGetHousesForSaleQuery,
} = HouseApiSlice;
