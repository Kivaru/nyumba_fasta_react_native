export interface House {
  id: number;
  address: string;
  area_id: number;
  district_id: number;
  region_id: number;
  user_id: number;
  agent_id: number;
  house_type: string;
  tiles: string;
  gypsum: string;
  aluminium: string;
  kitchen: string;
  ac: string;
  luku: string;
  fence: string;
  contact: string;
  number_of_room: number;
  description: string;
  rent: number;
  duedate: string | null;
  featured_image: string;
  renter_number: string | null;
  images: string;
  status: string;
  created_at: string;
  updated_at: string;
  media: Media[];
  wishlist: WishList[];
  payment: Payment[];
  user: User;
}

export interface Media {
  id: number;
  model_type: string;
  model_id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  conversions_disk: string;
  size: number;
  manipulations: any[];
  custom_properties: any[];
  generated_conversions: GeneratedConversion;
  responsive_images: any[];
  order_column: number;
  created_at: string;
  updated_at: string;
  original_url: string;
  preview_url: string;
}

interface GeneratedConversion {
  images: boolean;
  featured_image: boolean;
}

export interface WishList {
  id: number;
  user_id: number;
  user_agent: string;
  house_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null;
}

export interface Payment {
  id: number;
  amount: number;
  order_id: string;
  transid: string;
  selcom_transaction_id: string | null;
  user_id: string;
  house_id: number;
  gateway_buyer_uuid: string;
  payment_status: string;
  message_status: number;
  status: string | null;
  reference: string | null;
  msisdn: string | null;
  channel: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface User {
  id: number;
  role_id: number;
  name: string;
  email: string | null;
  provider: string | null;
  provider_id: string | null;
  contact: string;
  image: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  google_id: string | null;
  dialed: number;
  verified: number;
}

export interface HouseForSaleResponse {
  current_page: number;
  data: HouseForSale[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface HouseForSale {
  id: number;
  name: string;
  contact: string;
  address: string;
  area_id: number;
  district_id: number;
  region_id: number;
  user_id: number;
  property_type: string;
  deed: number;
  sqm: string;
  description: string;
  price: string;
  status: number;
  created_at: string;
  updated_at: string;
  media: Media[];
}
