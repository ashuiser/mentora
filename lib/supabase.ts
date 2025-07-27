import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

export const createSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      accessToken: (async function () {
        return ((await auth()).getToken());
      }),
    }
  )
}