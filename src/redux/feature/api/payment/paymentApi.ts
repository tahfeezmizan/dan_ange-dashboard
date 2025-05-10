/*eslint-disable*/

import { baseApi } from "../baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPayments: builder.query({
      query: () => ({
        url: `/_/payment-details`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),
    getPaymentStates: builder.query({
      query: () => ({
        url: `/dashboard/total-sell`,
        method: "GET",
      }),
      providesTags: ["Payment"],
    }),
  }),
});

export const { useGetAllPaymentsQuery, useGetPaymentStatesQuery } = paymentApi;
