import { defineStore } from 'pinia'

interface User {
  id: number;
  email: string;
  name: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
    },
    async login(email: string, password: string) {
      // Тут має бути запит до вашого API для авторизації
      // Це лише імітація для прикладу
      if (email === 'user@example.com' && password === 'password') {
        this.setUser({ id: 1, email, name: 'User' });
        this.setToken('fake-jwt-token');
        return true;
      }
      return false;
    },
    async register(email: string, password: string, name: string) {
      // Тут має бути запит до вашого API для реєстрації
      // Це лише імітація для прикладу
      this.setUser({ id: 1, email, name });
      this.setToken('fake-jwt-token');
      return true;
    },
    async checkAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        // Тут має бути запит до вашого API для перевірки токена
        // Це лише імітація для прикладу
        this.setToken(token);
        this.setUser({ id: 1, email: 'user@example.com', name: 'User' });
      }
    },
  },
})