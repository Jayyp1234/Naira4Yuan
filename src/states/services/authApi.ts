import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  EmailOtpRequest,
  VerifyEmailOtpRequest,
  SmsOtpRequest,
  VerifyPhoneOtpRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  FinalizeRegistrationRequest,
  LoginRequest,
  DefaultApiResponse,
} from "../types/auth.types";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://', //Replace with the actual baseUrl when provided and change to ENV for production
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendEmailOtp: builder.mutation<DefaultApiResponse, EmailOtpRequest>({
      query: (body) => ({
        url: '/api/user/auth/send-email-otp',
        method: 'POST',
        body,
      }),
    }),
    verifyEmailOtp: builder.mutation<DefaultApiResponse, VerifyEmailOtpRequest>({
      query: (body) => ({
        url: '/api/user/auth/verify-email-otp',
        method: 'POST',
        body,
      }),
    }),
    sendSmsOtp: builder.mutation<DefaultApiResponse, SmsOtpRequest>({
      query: (body) => ({
        url: '/api/user/auth/send-sms-otp',
        method: 'POST',
        body,
      }),
    }),
    verifyPhoneOtp: builder.mutation<DefaultApiResponse, VerifyPhoneOtpRequest>({
      query: (body) => ({
        url: '/api/user/auth/verify-phone-otp',
        method: 'POST',
        body,
      }),
    }),
    forgotPasswordOtp: builder.mutation<DefaultApiResponse, ForgotPasswordRequest>({
      query: (body) => ({
        url: '/api/user/auth/forgot-password-otp',
        method: 'POST',
        body,
      }),
    }),
    resetPasswordWithOtp: builder.mutation<DefaultApiResponse, ResetPasswordRequest>({
      query: (body) => ({
        url: '/api/user/auth/reset-password-with-otp',
        method: 'POST',
        body,
      }),
    }),
    finalizeRegistration: builder.mutation<DefaultApiResponse, FinalizeRegistrationRequest>({
      query: (body) => ({
        url: '/api/user/auth/finalize-registration',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<DefaultApiResponse, LoginRequest>({
      query: (body) => ({
        url: '/api/user/auth/login',
        method: 'POST',
        body,
      }),
    }),
    getCountries: builder.query<DefaultApiResponse, void>({
      query: () => '/api/user/location/countries',
    }),
    runQueue: builder.query<DefaultApiResponse, void>({
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
