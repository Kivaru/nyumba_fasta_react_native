export interface LoginResponse {
  user_id: number;
  user_role: number;
  token: string;
  status: string;
}

export interface RegisterResponse {
  user_id: number;
  token: string;
  status: string;
}

export interface UserProfileResponse {
  id: number;
  role_id: number;
  name: string;
  email: string;
  provider: null | string;
  provider_id: null | number;
  contact: string;
  image: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  google_id: number | null;
  dialed: number;
  verified: number;
}

export interface User {
  user_id: number;
  token: string;
}
