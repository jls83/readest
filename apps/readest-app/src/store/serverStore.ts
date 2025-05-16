import { create } from 'zustand';

import { READEST_WEB_BASE_URL } from '@/services/constants';

interface ServerState {
  appBackendUrl: string;
  supabaseUrl: string;
  supabaseAnonKey: string;

  setAppBackendUrl: (appBackendUrl: string) => void;
  setSupabaseUrl: (supabaseUrl: string) => void;
  setSupabaseAnonKey: (supabaseAnonKey: string) => void;
};

const supabaseUrl =
  process.env['NEXT_PUBLIC_SUPABASE_URL'] || process.env['NEXT_PUBLIC_DEV_SUPABASE_URL']!;
const supabaseAnonKey =
  process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] || process.env['NEXT_PUBLIC_DEV_SUPABASE_ANON_KEY']!;

export const useServerStore = create<ServerState>((set) => ({
  appBackendUrl: READEST_WEB_BASE_URL,
  supabaseUrl,
  supabaseAnonKey,

  setAppBackendUrl: (appBackendUrl: string) => {
    set(({ appBackendUrl }));
  },
  setSupabaseUrl: (supabaseUrl: string) => {
    set(({ supabaseUrl }));
  },
  setSupabaseAnonKey: (supabaseAnonKey: string) => {
    set(({ supabaseAnonKey }));
  },
}));
