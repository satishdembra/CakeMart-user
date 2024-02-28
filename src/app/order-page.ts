export interface OrderPage {
  order_id: number;
  customer_id: number;
  product_id: number;
  order_token: string;
  price_paid: string;
  qty: number;
  is_active: number;
  is_delete: number;
  created_at: string;
  updated_at: string;
}
