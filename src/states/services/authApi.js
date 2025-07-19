import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://', // Replace with the actual url when provided
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    sendEmailOtp: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/send-email-otp',
        method: 'POST',
        body,
      }),
    }),
    verifyEmailOtp: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/verify-email-otp',
        method: 'POST',
        body,
      }),
    }),
    sendSmsOtp: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/send-sms-otp',
        method: 'POST',
        body,
      }),
    }),
    verifyPhoneOtp: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/verify-phone-otp',
        method: 'POST',
        body,
      }),
    }),
    forgotPasswordOtp: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/forgot-password-otp',
        method: 'POST',
        body,
      }),
    }),
    resetPasswordWithOtp: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/reset-password-with-otp',
        method: 'POST',
        body,
      }),
    }),
    finalizeRegistration: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/finalize-registration',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/api/user/auth/login',
        method: 'POST',
        body,
      }),
    }),
    getCountries: builder.query({
      query: () => '/api/user/location/countries',
    }),
    runQueue: builder.query({
      query: () => '/run-queue',
    }),
  }),
});

export const {
  useSendEmailOtpMutation,
  useVerifyEmailOtpMutation,
  useSendSmsOtpMutation,
  useVerifyPhoneOtpMutation,
  useForgotPasswordOtpMutation,
  useResetPasswordWithOtpMutation,
  useFinalizeRegistrationMutation,
  useLoginMutation,
  useGetCountriesQuery,
  useRunQueueQuery,
} = authApi;
