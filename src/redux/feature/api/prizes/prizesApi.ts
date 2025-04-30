/*eslint-disable*/

import { baseApi } from "../baseApi";

const prizesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPrizes: builder.query({
      query: () => ({
        url: `/prizes`,
        method: "GET",
      }),
    }),

    createPrizes: builder.mutation({
      query: (data: any) => ({
        url: `/prizes/create`,
        method: "POST",
        body: data,
      }),
    }),

    // Next prize draw time
    createPrizeDrawTimeDate: builder.mutation({
      query: (data: any) => ({
        url: `prize-draw/create`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllPrizesQuery,
  useCreatePrizesMutation,
  useCreatePrizeDrawTimeDateMutation,
} = prizesApi;
