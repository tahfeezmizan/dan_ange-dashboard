/*eslint-disable*/

import { baseApi } from "../baseApi";

const AboutUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => ({
        url: `/about-us`,
        method: "GET",
      }),
      providesTags: ["AboutUs"],
    }),

    createAboutUs: builder.mutation({
      query: (data: any) => ({
        url: `/about-us/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AboutUs"],
    }),

    updateAboutUs: builder.mutation({
      query: (data: { titile?: string; description?: string }) => ({
        url: `/about-us/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["AboutUs"],
    }),
  }),
});

export const {
  useGetAboutUsQuery,
  useCreateAboutUsMutation,
  useUpdateAboutUsMutation,
} = AboutUsApi;
