
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yzygvrqszoughyeltgft.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6eWd2cnFzem91Z2h5ZWx0Z2Z0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDk0ODg0MywiZXhwIjoyMDk2NTI0ODQzfQ.oFc3VwVYMCItVMvNB1e8V1A2Avc3RXlI4RtJCc7oHCE";


export const supabase = createClient(supabaseUrl, supabaseKey)