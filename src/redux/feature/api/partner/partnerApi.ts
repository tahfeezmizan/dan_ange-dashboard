/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const PartnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Partner Form Data
    getAllPartnerFormInfo: builder.query({
      query: () => ({
        url: `/create-partner-form`,
        method: "GET",
      }),
      providesTags: ["Partner"],
    }),
    // Get All Partner Card Info's
    getAllPartnerCardInfo: builder.query({
      query: () => ({
        url: `/partner-cards`,
        method: "GET",
      }),
      providesTags: ["PartnerCard"],
    }),
    // Create All Partner Card
    createPartnerCard: builder.mutation({
      query: (data: any) => ({
        url: `/partner-cards/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["PartnerCard"],
    }),
    // Delete Partner Card
    deletePartnerCard: builder.mutation({
      query: (id: any) => ({
        url: `partner-cards/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["PartnerCard"],
    }),
    // Update Partner Card
    updatePartnerCard: builder.mutation({
      query: ({ id, data }) => ({
        url: `/our-Partner/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["PartnerCard"],
    }),
    // Get Partner Hero
    getPartnerHero: builder.query({
      query: () => ({
        url: `/become-partner-hero-sections`,
        method: "GET",
      }),
      providesTags: ["PartnerDescription"],
    }),
    // Update Partner Hero
    updatePartnerHero: builder.mutation({
      query: ({ data }) => ({
        url: `/become-partner-hero-sections/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["PartnerDescription"],
    }),

    deletePartnerHero: builder.mutation({
      query: () => ({
        url: `become-partner-hero-sections/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["PartnerDescription"],
    }),
  }),
});

export const {
  useGetAllPartnerFormInfoQuery,
  useGetAllPartnerCardInfoQuery,
  useCreatePartnerCardMutation,
  useDeletePartnerCardMutation,
  useUpdatePartnerCardMutation,
  useGetPartnerHeroQuery,
  useUpdatePartnerHeroMutation,
  useDeletePartnerHeroMutation,
} = PartnerApi;
