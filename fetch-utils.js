const SUPABASE_URL = 'https://gvhgebiiqjezrhkmcque.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2aGdlYmlpcWplenJoa21jcXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMzcsImV4cCI6MTk4MzY4NDAzN30.IPXrWCU6kYe9JaHUfGPnQcuwKDHonUpaRuCgs3uCEok';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createItem(item) {
    const response = await client.from('shopping-list').insert({ item });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function deleteAllItems() {
    const response = await client
        .from('shopping-list')
        .delete()
        .match({ user_id: client.auth.user().id });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function fetchItems() {
    const response = await client
        .from('shopping-list')
        .select('*')
        .order('item')
        .match({ user_id: client.auth.user().id });
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function buyItem() {}
