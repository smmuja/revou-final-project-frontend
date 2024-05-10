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
  product: Product[];
  business_images: Image[];
}

export interface AllBusiness {
  business_name: string;
  business_types: string;
  create_at: Date;
  description: string;
  id: string;
  profile_url: string
  update_at: Date;
  user_email: string;
  user_phone_number: string;
  username: string;
}
