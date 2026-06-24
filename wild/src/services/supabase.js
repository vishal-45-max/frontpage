import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppbWFqcWR2Y3lieGxyeml2aWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMTg0NjQsImV4cCI6MjA5Nzc5NDQ2NH0.SqxM5pr4MdV0EiKh-Hjtgivljz9PnOun9N9ckLxdSdA'
export default supabase;