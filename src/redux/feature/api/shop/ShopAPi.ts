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
        url: `/promotional-packs`,
        method: "GET",
      }),
      providesTags: ["ShopPack"],
    }),
    // delete shop pack
    deleteShopPack: builder.mutation({
      query: (id) => ({
        url: `/promotional-packs/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["ShopPack"],
    }),
    // create shop pack
    createShopPack: builder.mutation({
      query: (data) => ({
        url: `/promotional-packs/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ShopPack"],
    }),
    // update shop pack
    updateShopPack: builder.mutation({
      query: ({ data, id }) => ({
        url: `/promotional-packs/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ShopPack"],
    }),
    // shop products ...
    // add shop product
    // get all shop prizes/ products
    getAllShopPrizes: builder.query({
      query: () => ({
        url: `/prizes`,
        method: "GET",
      }),
      providesTags: ["ShopPrize"],
    }),
    createShopPrize: builder.mutation({
      query: (data) => ({
        url: `/prizes/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ShopPrize"],
    }),
    // delete shop product
    deleteShopPrize: builder.mutation({
      query: (id) => ({
        url: `prizes/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["ShopPrize"],
    }),
    // update shop product
    updateShopPrize: builder.mutation({
      query: ({ data, id }) => ({
        url: `/prizes/${id}/update`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ShopPrize"],
    }),
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
  useGetAllShopPrizesQuery,
  useCreateShopPrizeMutation,
  useDeleteShopPrizeMutation,
  useUpdateShopPrizeMutation,
} = ShopApi;
