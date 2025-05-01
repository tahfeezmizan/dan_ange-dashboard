/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const FaqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Faqs
    getAllFaqs: builder.query({
      query: ({ tag }) => ({
        url: `/faqs?tag=${tag}`,
        method: "GET",
      }),
      providesTags: ["Faq"],
    }),

    // Create Faq
    createFaq: builder.mutation({
      query: (data: any) => ({
        url: `/faqs/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Faq"],
    }),
    // Delete Faq
    deleteFaq: builder.mutation({
      query: (id: any) => ({
        url: `faqs/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Faq"],
    }),
    // Update Faq
    updateFaq: builder.mutation({
      query: ({ id, data }) => ({
        url: `/faqs/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Faq"],
    }),
  }),
});

export const {
  useGetAllFaqsQuery,
  useCreateFaqMutation,
  useDeleteFaqMutation,
  useUpdateFaqMutation,
} = FaqApi;
