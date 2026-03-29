import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xvzobnnisihmpglpmmto.supabase.co";
const supabaseKey = "sb_publishable_DCdDHLGDsHYqPFD0NtHpNg_uAvV5MMe";

export const supabase = createClient(supabaseUrl, supabaseKey);
