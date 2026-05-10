import { createClient } from '@supabase/supabase-js'

const url = 'https://ezoidfgpazczkhrydozeg.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6b2lkZmdwYXpja2hyeWRvemVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzA3MDMsImV4cCI6MjA5NDAwNjcwM30.mjFbPp0-gh5CBFkZm7Tv6E_5BloBMVlQCDkcAH0iasI'

export const supabase = createClient(url, key)
