import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEAPI = process.env.NEXT_PUBLIC_BASEURL;

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEAPI,
    prepareHeaders: (headers: Headers, { getState }) => {
      console.log(getState);
      const localToken = localStorage.getItem("accessToken");
      if (localToken) {
        headers.set("authorization", `Bearer ${localToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Auth",
    "Faq",
    "Sponsors",
    "Impacts",
    "CharityPartners",
    "HowItWorks",
    "AboutUs",
    "ShopDescription",
    "Partner",
    "PartnerCard",
    "PartnerDescription",
    "Winners",
    "Ambassadors",
    "Dashboard",
    "HeroContents",
    "OrderDetails",
    "ShopPack",
    "ShopProduct",
  ],
});
export const {} = baseApi;
