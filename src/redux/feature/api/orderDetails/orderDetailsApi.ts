/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const OrderDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Impacts
    getAllOrderDetails: builder.query({
      query: () => ({
        url: `order-details`,
        method: "GET",
      }),
      providesTags: ["OrderDetails"],
    }),

    getAllRaffleEntries: builder.query({
      query: (id: any) => ({
        url: `order-details/${id}/raffle-entries`,
        method: "GET",
      }),
      providesTags: ["OrderDetails"],
    }),
  }),
});

export const { useGetAllOrderDetailsQuery, useGetAllRaffleEntriesQuery } =
  OrderDetailsApi;
