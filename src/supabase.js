import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hevztjcebvppkrlnqvpc.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhldnp0amNlYnZwcGtybG5xdnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NzY1MzAsImV4cCI6MjAyNzA1MjUzMH0.TZnks7NRB_S4eCgWCoEv8nFKHywMauT7o4ppkk09dHA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
