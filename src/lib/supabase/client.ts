import { environment } from "@/configs/environment";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const { SUPABASE_ANON_KEY, SUPABASE_URL } = environment;
  // console.log("urlnya adalah: ", SUPABASE_URL);
  return createBrowserClient(SUPABASE_URL!, SUPABASE_ANON_KEY!);
}
