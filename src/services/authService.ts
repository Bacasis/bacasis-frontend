import api from './api';
import type { LoginCredentials, RegisterData, User } from '../types';

interface LoginResponse {
  token: string;
  user: User;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  },

  async register(data: RegisterData): Promise<void> {
    await api.post('/auth/register', data);
  },
};
