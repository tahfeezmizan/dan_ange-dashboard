import { baseApi } from "../baseApi";

const ShopApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get All Shop Description Info's
    getAllShopDescription: builder.query({
      query: () => ({
        url: `/shop-descriptions`,
        method: "GET",
      }),
      providesTags: ["ShopDescription"],
    }),
    // Add Shop Description Info's
    addShopDescription: builder.mutation({
      query: (data) => ({
        url: `/shop-descriptions/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ShopDescription"],
    }),

    updateShopDescription: builder.mutation({
      query: (data) => ({
        url: `/shop-descriptions/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ShopDescription"],
    }),

    // Shop Packs....
    // Get All Shop Packs Info's
    getAllShopPacks: builder.query({
      query: () => ({
        url: `/shop-page-products`,
        method: "GET",
      }),
      providesTags: ["ShopPack"],
    }),
    // delete shop pack
    deleteShopPack: builder.mutation({
      query: (id) => ({
        url: `/shop-page-products/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["ShopPack"],
    }),
    // create shop pack
    createShopPack: builder.mutation({
      query: (data) => ({
        url: `/shop-page-products/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ShopPack"],
    }),
    // update shop pack
    updateShopPack: builder.mutation({
      query: ({ data, id }) => ({
        url: `/shop-page-products/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ShopPack"],
    }),
    // shop products ...
    // add shop product
  }),
});

export const {
  useGetAllShopDescriptionQuery,
  useAddShopDescriptionMutation,
  useUpdateShopDescriptionMutation,
  useGetAllShopPacksQuery,
  useDeleteShopPackMutation,
  useCreateShopPackMutation,
  useUpdateShopPackMutation,
} = ShopApi;
