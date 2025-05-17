import { create } from 'zustand';

import { READEST_WEB_BASE_URL } from '@/services/constants';
import { SupabaseClient } from '@supabase/supabase-js';

interface ServerState {
  appBackendUrl: string;
  supabaseUrl: string;
  supabaseAnonKey: string;

  setAppBackendUrl: (appBackendUrl: string) => void;
  setSupabaseUrl: (supabaseUrl: string) => void;
  setSupabaseAnonKey: (supabaseAnonKey: string) => void;

  getSupabaseClient: () => SupabaseClient<any, "public", any>;
};

const supabaseUrl =
  process.env['NEXT_PUBLIC_SUPABASE_URL'] || process.env['NEXT_PUBLIC_DEV_SUPABASE_URL']!;
const supabaseAnonKey =
  process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] || process.env['NEXT_PUBLIC_DEV_SUPABASE_ANON_KEY']!;

export const useServerStore = create<ServerState>((set, get) => ({
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

  getSupabaseClient: () => {
    const { supabaseUrl, supabaseAnonKey } = get();
  },
}));
