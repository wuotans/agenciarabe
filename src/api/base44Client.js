export const base44 = {
  auth: {
    loginViaEmailPassword: async (email, password) => {
      console.log('Login mockado:', { email, password });
      return { user: { id: 1, email, name: 'Usuário' } };
    },
    
    register: async ({ email, password }) => {
      console.log('Registro mockado:', { email, password });
      return { success: true };
    },
    
    verifyOtp: async ({ email, otpCode }) => {
      console.log('Verify OTP mockado:', { email, otpCode });
      return { access_token: 'mock-token-123' };
    },
    
    resendOtp: async (email) => {
      console.log('Resend OTP mockado:', email);
      return { success: true };
    },
    
    me: async () => {
      return { id: 1, email: 'visitante@exemplo.com', name: 'Visitante' };
    },
    
    logout: () => {
      console.log('Logout mockado');
      localStorage.removeItem('base44_access_token');
    },
    
    loginWithProvider: (provider, redirectUrl) => {
      console.log(`Login com ${provider} mockado`);
      if (provider === 'google') {
        window.location.href = 'https://wa.me/5511999999999';
      }
    },
    
    resetPasswordRequest: async (email) => {
      console.log('Reset password request mockado:', email);
      return { success: true };
    },
    
    resetPassword: async ({ resetToken, newPassword }) => {
      console.log('Reset password mockado:', { resetToken, newPassword });
      return { success: true };
    },
    
    setToken: (token) => {
      console.log('Set token mockado:', token);
      localStorage.setItem('base44_access_token', token);
    },
    
    redirectToLogin: (redirectUrl) => {
      console.log('Redirect to login mockado:', redirectUrl);
    }
  },
  
  collections: {
    get: async () => ({ data: [] }),
    create: async () => ({ data: {} })
  }
};