import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "@/lib/config";
import { BaseResponse } from "./authApi";

const baseUrl = getApiBaseUrl();

export interface ContactUsRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: string;
  state: string;
  body: string;
  terms_accepted: boolean;
}

export const systemApi = createApi({
  reducerPath: "systemApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    contactUs: builder.mutation<BaseResponse<null>, ContactUsRequest>({
      query: (body) => ({
        url: "/api/user/system/contact-us",
        method: "POST",
        body,
      }),
    }),
    clearCache: builder.query<BaseResponse<null>, void>({
      query: () => ({
        url: "/clear-cache",
        method: "GET",
      }),
    }),
    getSystemOverview: builder.query<BaseResponse<any>, void>({
      query: () => ({
        url: "/run-queue",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useContactUsMutation,
  useClearCacheQuery,
  useGetSystemOverviewQuery,
} = systemApi;
