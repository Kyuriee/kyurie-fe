import { create } from "zustand";
import { User } from "@/types";

type AuthStore = {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
};

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  token: null,
  setAuth: (user, token) => {
    localStorage.setItem("token", token);
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));