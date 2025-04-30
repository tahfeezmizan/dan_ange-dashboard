/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const sponsorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSponsors: builder.query({
      query: () => ({
        url: `/sponsors`,
        method: "GET",
      }),
      providesTags: ["Sponsors"],
    }),

    createSponsors: builder.mutation({
      query: (data: any) => ({
        url: `/sponsors/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Sponsors"],
    }),

    deleteSponsors: builder.mutation({
      query: (id: any) => ({
        url: `/sponsors/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Sponsors"],
    }),
  }),
});

export const {
  useGetAllSponsorsQuery,
  useCreateSponsorsMutation,
  useDeleteSponsorsMutation,
} = sponsorsApi;
