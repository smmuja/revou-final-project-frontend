import { Image } from "./User";
import { Product } from "./Product";

export interface Business {
  business_types: string;
  business_name: string;
  profile_url: string;
  id: string;
  create_at: Date;
  update_at: Date;
  description: string;
}

export interface BusinessPublic {
  page: number;
  limit: number;
  search: string;
  total_page: number;
  total_data: number;
  data: AllBusiness[];
}

export interface BusinessPostEditPayload {
  business_name: string;
  business_types: string;
  description: string;
}

export interface BusinessPostEditDetailResponse {
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
  is_delete: boolean;
  product: Product[];
  business_images: Image[];
}

export interface AllBusiness {
  business_types: string;
  business_name: string;
  profile_url: string;
  id: string;
  create_at: Date;
  update_at: Date;
  description: string;
  is_delete: boolean;
  user_phone_number: string;
  user_email: string;
  username: string;
}
