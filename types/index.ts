export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type Product = {
  id: number;
  game: string;
  category: string;
  item: string;
  price: number;
};

export type Transaction = {
  id: string;
  user_id: number;
  product_id: number;
  game: string;
  item: string;
  user_game_id: string;
  price: number;
  status: "success" | "pending" | "failed";
  created_at: string;
};

export type AuthResponse = {
  token: string;
  user: User;
};