import { Image } from "./User";

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

export interface ProductPublic {
  page: number;
  limit: number;
  search: string;
  total_page: number;
  total_data: number;
  data: AllProduct[];
}

export interface ProductPayload {
  product_name: string;
  product_price: number;
  business_id: string;
  description: string;
}

export interface ProductPostEditResponse {
  product_name: string;
  product_price: number;
  id: string;
  create_at: Date;
  update_at: Date;
  profile_url: string;
  business_name: string;
  username: string;
  business_id: string;
  user_id: string;
  description: string;
  product_images: ProductImage[];
}

export interface ProductImage {
  id: string;
  public_id: string;
  secure_url: string;
  user_id: string;
  create_at: Date;
}

export interface AllProduct {
  business_id: string;
  business_name: string;
  create_at: Date;
  description: string;
  id: string;
  product_name: string;
  product_price: number;
  profile_url: string;
  update_at: Date;
  user_id: string;
  username: string;
}

// import baseApi from "./baseApi";

export interface ProductEditPayload {
  product_name: string;
  product_price: number;
  description: string;
}

export interface ProductImage {
  id: string;
  public_id: string;
  secure_url: string;
  user_id: string;
  create_at: Date;
}
