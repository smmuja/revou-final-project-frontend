// import baseApi from "./baseApi";

export interface RegisterPayload {
  username: string;
  password: string;
  email: string;
}

export interface RegisterResponse {
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

export interface Business {
  business_types: string;
  business_name: string;
  profile_url: string;
  id: string;
  create_at: Date;
  update_at: Date;
  description: string;
}

export interface Image {
  id: string;
  public_id: string;
  secure_url: string;
  user_id: string;
  create_at: Date;
}

export interface Product {
  product_name: string;
  product_price: number;
  product_images: Image[];
  profile_url: string;
  id: string;
  description: string;
  create_at: Date;
  update_at: Date;
}
