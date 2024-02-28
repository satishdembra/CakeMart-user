export interface ProductDetail {
  product_id: number;
  product_image: string;
  product_title: string;
  product_desc: string;
  product_avg_rating: number;
  product_review_count: number;
  product_rating_count: number;
  product_currency: string;
  product_old_price: number;
  product_new_lesser_price: number;
  rating_review_id: number;
  customer_name: string;
  number_star: string;
  rating_review_comment: string;
  created_at_month: string;
  created_at_year: string;
}
