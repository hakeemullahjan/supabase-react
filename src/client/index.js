import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://wghswmcdczssacndlzjx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODMyODUyMywiZXhwIjoxOTQzOTA0NTIzfQ.NsPZVuFqGhzzI345HIs_axoj60rA7ZwiPbHgbprgQUI"
);
