import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'


// Create a single supabase client for interacting with your database
export const supabase = createClientComponentClient()

export const revalidateObject = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
}
