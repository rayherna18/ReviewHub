import { createClient } from '@supabase/supabase-js';

const URL = 'https://jdmkyhtbjyvwvqrybosy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkbWt5aHRianl2d3Zxcnlib3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyOTE5ODgsImV4cCI6MjAxNDg2Nzk4OH0.C4oVLlo9KoF7hJfs7r9INhy0ESqsSfEOq3ZuWuh-miA'
export const supabase = createClient(URL, API_KEY);
