import api from './api';
import type { Project, ProjectFormData } from '../types';

export const projectsService = {
  async getProjects(search?: string): Promise<Project[]> {
    const params = new URLSearchParams();
    if (search) params.append('search', search);

    const response = await api.get<Project[]>(`/projects?${params.toString()}`);
    return response.data;
  },

  async getProject(id: string): Promise<Project> {
    const response = await api.get<Project>(`/projects/${id}`);
    return response.data;
  },

  async createProject(data: ProjectFormData): Promise<Project> {
    const response = await api.post<Project>('/projects', data);
    return response.data;
  },

  async updateProject(id: string, data: ProjectFormData): Promise<Project> {
    const response = await api.put<Project>(`/projects/${id}`, data);
    return response.data;
  },

  async deleteProject(id: string): Promise<void> {
    await api.delete(`/projects/${id}`);
  },
};
