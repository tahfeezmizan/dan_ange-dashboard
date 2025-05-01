/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

const CharityPartnerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All CharityPartners
    getAllCharityPartners: builder.query({
      query: () => ({
        url: `charity-partners`,
        method: "GET",
      }),
      providesTags: ["CharityPartners"],
    }),
    // Create CharityPartner
    createCharityPartner: builder.mutation({
      query: (data: any) => ({
        url: `/charity-partners/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CharityPartners"],
    }),
    // Delete CharityPartner
    deleteCharityPartner: builder.mutation({
      query: (id: any) => ({
        url: `charity-partners/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["CharityPartners"],
    }),
    // Update CharityPartner
    updateCharityPartner: builder.mutation({
      query: ({ id, data }: { id: string; data: FormData }) => ({
        url: `charity-partners/${id}/update`, // ID in URL ✅
        method: "PATCH",
        body: data, // FormData in body ✅
      }),
      invalidatesTags: ["CharityPartners"],
    }),
  }),
});

export const {
  useGetAllCharityPartnersQuery,
  useCreateCharityPartnerMutation,
  useDeleteCharityPartnerMutation,
  useUpdateCharityPartnerMutation,
} = CharityPartnerApi;
