import api from './api';
import type { Musician, MusicianFormData } from '../types';

export const musiciansService = {
  async getMusicians(search?: string, instrument?: string): Promise<Musician[]> {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (instrument && instrument !== 'All Instruments') params.append('instrument', instrument);

    const response = await api.get<Musician[]>(`/musicians?${params.toString()}`);
    return response.data;
  },

  async getMusician(id: number): Promise<Musician> {
    const response = await api.get<Musician>(`/musicians/${id}`);
    return response.data;
  },

  async createMusician(data: MusicianFormData): Promise<Musician> {
    const response = await api.post<Musician>('/musicians', data);
    return response.data;
  },

  async updateMusician(id: number, data: MusicianFormData): Promise<Musician> {
    const response = await api.put<Musician>(`/musicians/${id}`, data);
    return response.data;
  },

  async deleteMusician(id: number): Promise<void> {
    await api.delete(`/musicians/${id}`);
  },
};
