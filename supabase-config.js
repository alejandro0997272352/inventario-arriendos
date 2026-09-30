const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
const SUPABASE_ANON_KEY = 'tu-anon-key';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function supabaseGetAll() {
  const { data, error } = await supabaseClient.from('pagos').select('*');
  if (error) throw error;
  return data || [];
}

async function supabaseAdd(record) {
  const { data, error } = await supabaseClient.from('pagos').insert([record]).select();
  if (error) throw error;
  return data[0];
}

async function supabasePut(record) {
  const { error } = await supabaseClient.from('pagos').update(record).eq('id', record.id);
  if (error) throw error;
}

async function supabaseDelete(id) {
  const { error } = await supabaseClient.from('pagos').delete().eq('id', id);
  if (error) throw error;
}

async function supabaseClear() {
  const { error } = await supabaseClient.from('pagos').delete().neq('id', 0);
  if (error) throw error;
}
