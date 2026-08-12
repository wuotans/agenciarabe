const API_URL = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
const TOKEN_KEY = 'agenciarabe_access_token';

const getToken = () => localStorage.getItem(TOKEN_KEY);

const setToken = (token) => {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
};

async function request(path, options = {}) {
  const headers = new Headers(options.headers || {});
  const token = getToken();

  if (options.body && !(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) headers.set('Authorization', `Bearer ${token}`);

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    body:
      options.body && !(options.body instanceof FormData) && typeof options.body !== 'string'
        ? JSON.stringify(options.body)
        : options.body,
  });

  if (response.status === 204) return null;

  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const error = new Error(data?.message || data?.error || 'Erro na API');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export const api = {
  auth: {
    me: () => request('/auth/me'),
    login: async (email, password) => {
      const result = await request('/auth/login', {
        method: 'POST',
        body: { email, password },
      });
      if (result?.access_token) setToken(result.access_token);
      return result;
    },
    logout: (redirectTo) => {
      setToken(null);
      if (redirectTo) window.location.href = redirectTo;
    },
    setToken,
  },
  request,
};
