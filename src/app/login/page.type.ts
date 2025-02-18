export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
  }
  
  export interface LoginState {
    loading: boolean;
    error: string | null;
    accessToken: string | null;
  }
  
  export interface LoginViewProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading: boolean;
    error: string | null;
    accessToken: string | null;
  }