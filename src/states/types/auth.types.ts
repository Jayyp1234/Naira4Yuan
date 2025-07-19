export interface EmailOtpRequest {
  first_name: string;
  last_name: string;
  email: string;
}

export interface VerifyEmailOtpRequest extends EmailOtpRequest {
  code: string;
}

export interface SmsOtpRequest {
  userRefCode: string;
  password: string;
  pin: string;
  phone_number: string;
  country_id: number;
  method: 'sms' | 'whatsapp' | 'call';
  username: string;
}

export interface VerifyPhoneOtpRequest extends Omit<SmsOtpRequest, 'method'> {
  code: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  otp: string;
  password: string;
  confirm_password: string;
}

export interface FinalizeRegistrationRequest {
  userRefCode: string;
  hear_about_us: string;
  referred_by?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface DefaultApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
  errors?: any;
  timestamp?: string;
  code?: number;
}
