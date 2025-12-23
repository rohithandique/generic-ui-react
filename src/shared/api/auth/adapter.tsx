export interface AuthAdapter {
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  onAuthStateChange: (callback: (user: any) => void) => void;
}
