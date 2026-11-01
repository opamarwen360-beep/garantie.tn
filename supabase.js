import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://rlldlzxwxzgakgwrhclh.supabase.co";
const SUPABASE_KEY = "sb_publishable_hhwtchaNw_9AK-3-v51tQw_KjHTAafV";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
