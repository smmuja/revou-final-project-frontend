// import baseApi from "./baseApi";

export interface ProductPayload {
  product_name: string;
  product_price: number;
  business_id: string;
  description: string;
}

export interface ProductResponse {
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
