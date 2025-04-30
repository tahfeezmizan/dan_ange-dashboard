/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const winnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWinners: builder.query({
      query: () => ({
        url: `/winners`,
        method: "GET",
      }),
      providesTags: ["Winners"],
    }),

    createWinner: builder.mutation({
      query: (data: any) => ({
        url: `/winners/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Winners"],
    }),

    deleteWinners: builder.mutation({
      query: (id: any) => ({
        url: `winners/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Winners"],
    }),
    updatePartnerCard: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-Partner/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["PartnerCard"],
    }),
    updateWinners: builder.mutation({
      query: ({ id, data }) => ({
        url: `winners/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Winners"],
    }),
  }),
});

export const {
  useGetAllWinnersQuery,
  useCreateWinnerMutation,
  useDeleteWinnersMutation,
  useUpdateWinnersMutation,
} = winnerApi;
