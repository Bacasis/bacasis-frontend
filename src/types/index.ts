export interface User {
  id: number;
  username: string;
  email: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
  initializeAuth: () => void;
}

export interface Musician {
  id: number;
  name: string;
  instrument: string;
  email: string;
  phone?: string;
  status: 'Active' | 'Inactive';
  created_at?: string;
  updated_at?: string;
}

export interface MusicianFormData {
  name: string;
  instrument: string;
  email: string;
  phone?: string;
}

export type Instrument =
  | 'Violin'
  | 'Viola'
  | 'Cello'
  | 'Contrabass'
  | 'Flute'
  | 'Oboe'
  | 'Clarinet'
  | 'Bassoon'
  | 'French Horn'
  | 'Trumpet'
  | 'Trombone'
  | 'Tuba'
  | 'Timpani'
  | 'Percussion'
  | 'Piano'
  | 'Harp';

export const INSTRUMENTS: Instrument[] = [
  'Violin',
  'Viola',
  'Cello',
  'Contrabass',
  'Flute',
  'Oboe',
  'Clarinet',
  'Bassoon',
  'French Horn',
  'Trumpet',
  'Trombone',
  'Tuba',
  'Timpani',
  'Percussion',
  'Piano',
  'Harp',
];

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}
