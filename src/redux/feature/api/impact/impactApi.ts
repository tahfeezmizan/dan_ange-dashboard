/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const ImpactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Impacts
    getAllImpacts: builder.query({
      query: () => ({
        url: `/our-impacts`,
        method: "GET",
      }),
      providesTags: ["Impacts"],
    }),
    // Create Impact
    createImpact: builder.mutation({
      query: (data: any) => ({
        url: `/our-impacts/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Impacts"],
    }),
    // Delete Impact
    deleteImpact: builder.mutation({
      query: (id: any) => ({
        url: `our-impacts/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Impacts"],
    }),
    // Update Impact
    updateImpact: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-impacts/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Impacts"],
    }),
  }),
});

export const {
  useGetAllImpactsQuery,
  useCreateImpactMutation,
  useDeleteImpactMutation,
  useUpdateImpactMutation,
} = ImpactApi;
