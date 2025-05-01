/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const AmbassadorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Ambassadors
    getAllAmbassadors: builder.query({
      query: () => ({
        url: `/ambassadors`,
        method: "GET",
      }),
      providesTags: ["Ambassadors"],
    }),
    // Create Ambassador
    createAmbassador: builder.mutation({
      query: (data: any) => ({
        url: `/ambassadors/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Ambassadors"],
    }),
    // Delete Ambassador
    deleteAmbassador: builder.mutation({
      query: (id: any) => ({
        url: `/ambassadors/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Ambassadors"],
    }),
    // Update Ambassador
    updateAmbassador: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-Ambassadors/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Ambassadors"],
    }),
  }),
});

export const {
  useGetAllAmbassadorsQuery,
  useCreateAmbassadorMutation,
  useDeleteAmbassadorMutation,
  useUpdateAmbassadorMutation,
} = AmbassadorApi;
