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