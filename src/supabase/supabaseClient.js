import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ecnzgzjjdmvkaxkojugj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjbnpnempqZG12a2F4a29qdWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODkzODAsImV4cCI6MjA2NjI2NTM4MH0.LCqDmo7ilOLbQwDgn1AtcjTNdBnQYm5hZHTvAsojbGw';

export const supabase = createClient(supabaseUrl, supabaseKey);
