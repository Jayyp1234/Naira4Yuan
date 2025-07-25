import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "@/lib/config";

const baseUrl = getApiBaseUrl();

interface BaseResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  errors: any;
  code: number;
  timestamp: string;
}

// Request Interfaces
interface SendEmailOtpRequest {
  first_name: string;
  last_name: string;
  email: string;
}

interface VerifyEmailOtpRequest {
  first_name: string;
  last_name: string;
  email: string;
  code: string;
}

interface SendSmsOtpRequest {
  userRefCode: string;
  password: string;
  pin: string;
  phone_number: string;
  country_id: number;
  method: "sms" | "whatsapp" | "call";
  username: string;
}

interface VerifyPhoneOtpRequest extends Omit<SendSmsOtpRequest, "method"> {
  code: string;
}

interface FinalizeRegistrationRequest {
  userRefCode: string;
  hear_about_us: string;
  referred_by?: string;
}

interface ForgotPasswordOtpRequest {
  email: string;
}

interface ResetPasswordRequest {
  email: string;
  otp: string;
  password: string;
  confirm_password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface Country {
  id: number;
  name: string;
  code: string;
  phonecode: string;
  flag_url: string;
}

interface CountriesListResponse {
  countries: Country[];
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    sendEmailOtp: builder.mutation<BaseResponse, SendEmailOtpRequest>({
      query: (body) => ({
        url: "/api/user/auth/send-email-otp",
        method: "POST",
        body,
      }),
    }),

    verifyEmailOtp: builder.mutation<BaseResponse, VerifyEmailOtpRequest>({
      query: (body) => ({
        url: "/api/user/auth/verify-email-otp",
        method: "POST",
        body,
      }),
    }),

    sendSmsOtp: builder.mutation<BaseResponse, SendSmsOtpRequest>({
      query: (body) => ({
        url: "/api/user/auth/send-sms-otp",
        method: "POST",
        body,
      }),
    }),

    verifyPhoneOtp: builder.mutation<BaseResponse, VerifyPhoneOtpRequest>({
      query: (body) => ({
        url: "/api/user/auth/verify-phone-otp",
        method: "POST",
        body,
      }),
    }),

    finalizeRegistration: builder.mutation<
      BaseResponse,
      FinalizeRegistrationRequest
    >({
      query: (body) => ({
        url: "/api/user/auth/finalize-registration",
        method: "POST",
        body,
      }),
    }),

    forgotPasswordOtp: builder.mutation<BaseResponse, ForgotPasswordOtpRequest>(
      {
        query: (body) => ({
          url: "/api/user/auth/forgot-password-otp",
          method: "POST",
          body,
        }),
      }
    ),

    resetPasswordWithOtp: builder.mutation<BaseResponse, ResetPasswordRequest>({
      query: (body) => ({
        url: "/api/user/auth/reset-password-with-otp",
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation<BaseResponse, LoginRequest>({
      query: (body) => ({
        url: "/api/user/auth/login",
        method: "POST",
        body,
      }),
    }),

    runQueue: builder.query<BaseResponse, void>({
      query: () => ({
        url: "/run-queue",
        method: "GET",
      }),
    }),

    getCountriesList: builder.query<BaseResponse<CountriesListResponse>, void>({
      query: () => ({
        url: "/api/user/location/countries",
        method: "GET",
      }),
    }),

    
  }),
});

export const {
  useSendEmailOtpMutation,
  useVerifyEmailOtpMutation,
  useSendSmsOtpMutation,
  useVerifyPhoneOtpMutation,
  useFinalizeRegistrationMutation,
  useForgotPasswordOtpMutation,
  useResetPasswordWithOtpMutation,
  useLoginMutation,
  useRunQueueQuery,
  useGetCountriesListQuery,
} = authApi;
