import { createClient } from "@supabase/supabase-js";

let _client = null;

function getClient() {
  if (!_client) {
    _client = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    );
  }
  return _client;
}

export const supabaseAdmin = new Proxy(
  {},
  {
    get(_target, prop) {
      return Reflect.get(getClient(), prop);
    },
  }
);
