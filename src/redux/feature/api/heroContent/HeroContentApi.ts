/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const HeroContentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All CharityPartners
    getAllHeroContents: builder.query({
      query: () => ({
        url: `/hero-contents`,
        method: "GET",
      }),
      providesTags: ["HeroContents"],
    }),
    // Create HeroContent
    createHeroContent: builder.mutation({
      query: (data: any) => ({
        url: `hero-contents/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["HeroContents"],
    }),
    // Delete HeroContent
    deleteHeroContent: builder.mutation({
      query: (id: any) => ({
        url: `hero-contents/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["HeroContents"],
    }),
    // Update HeroContent
    updateHeroContent: builder.mutation({
      query: ({ id, data }: { id: string; data: any }) => ({
        url: `hero-contents/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["HeroContents"],
    }),
  }),
});

export const {
  useGetAllHeroContentsQuery,
  useCreateHeroContentMutation,
  useDeleteHeroContentMutation,
  useUpdateHeroContentMutation,
} = HeroContentApi;
