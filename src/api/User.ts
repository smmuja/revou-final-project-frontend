// import baseApi from "./baseApi";
import { Business } from "./Business";
import { Product } from "./Product";

export interface UserPostEdit {
  phone_number: string;
  address: string;
  occupation: string;
  description: string;
  username: string;
  email: string;
}

export interface getUserDetail extends UserPostEdit {
  id: string;
  create_at: Date;
  update_at: Date;
  user_type: string;
  profile_url: string;
  images: Image[];
  product_amount: number;
  business_amount: number;
  business: Business[];
  product: Product[];
}

export interface UserEditResponse {
  access_token(access_token: any): unknown;
  phone_number: string;
  address: string;
  occupation: string;
  description: string;
  username: string;
  email: string;
  id: string;
  create_at: Date;
  update_at: Date;
  user_type: string;
  profile_url: string;
  images: Image[];
  product_amount: number;
  business_amount: number;
  business: Business[];
  product: Product[];
}

export interface LoginRegisterPayload {
  username: string;
  password: string;
  email: string;
}

export interface LoginRegisterResponse {
  phone_number: string;
  address: string;
  occupation: string;
  description: string;
  username: string;
  email: string;
  id: string;
  create_at: Date;
  update_at: Date;
  user_type: string;
  profile_url: string;
  images: Image[];
  product_amount: number;
  business_amount: number;
  business: Business[];
  product: Product[];
  access_token: string;
  user_id: string;
}

export interface Image {
  id: string;
  public_id: string;
  secure_url: string;
  user_id: string;
  create_at: Date;
}

export interface RegisterError {
  code: number;
  message: string;
  status: string;
}
