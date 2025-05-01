/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const AddHowItWorks = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHowItWorks: builder.query({
      query: () => ({
        url: `/how-it-works`,
        method: "GET",
      }),
      providesTags: ["HowItWorks"],
    }),
    createHowItWorks: builder.mutation({
      query: (data: any) => ({
        url: `/how-it-works/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["HowItWorks"],
    }),
    deleteHowItWorks: builder.mutation({
      query: (id: string) => ({
        url: `/how-it-works/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["HowItWorks"],
    }),
    updateHowItWorks: builder.mutation({
      query: ({ id, data }) => ({
        url: `how-it-works/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["HowItWorks"],
    }),
  }),
});

export const {
  useCreateHowItWorksMutation,
  useGetHowItWorksQuery,
  useDeleteHowItWorksMutation,
  useUpdateHowItWorksMutation,
} = AddHowItWorks;
