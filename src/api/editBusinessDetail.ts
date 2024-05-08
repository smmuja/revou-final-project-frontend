// import baseApi from "./baseApi";

export interface BusinessEditPayload {
  business_name: string;
  business_types: string;
  description: string;
}

export interface BusinessEditResponse {
  business_types: string;
  business_name: string;
  profile_url: string;
  id: string;
  create_at: Date;
  update_at: Date;
  description: string;
  user_phone_number: string;
  user_email: string;
  username: string;
  product: Product[];
  business_images: Image[];
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
