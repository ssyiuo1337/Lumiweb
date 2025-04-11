import httpClient from './ApiService';
import axios, { AxiosError } from 'axios';

class AuthService {
  setUsername(username: string): void {
    localStorage.setItem('username', username);
  }
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  setJwtToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }
  setRefreshToken(token: string): void {
    localStorage.setItem('refreshToken', token);
  }

  getJwtToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  clearTokens(): void {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    const jwtToken = this.getJwtToken();
    return jwtToken !== null;
  }

  async register(username: string, password: string, email: string, token: string): Promise<void> {
    try {
      const response = await httpClient.post('/auth/register/', {
        username,
        password,
        email,
        token,
      });
      const { access, refresh } = response.data;
      this.setUsername(username);


      this.setJwtToken(access);
      this.setRefreshToken(refresh);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  // Авторизация пользователя
  async login(login: string, password: string): Promise<string> {
    try {
      const response = await httpClient.post('/auth/login/', {
        login,
        password,
      });
  
      const { access, refresh } = response.data;
      this.setJwtToken(access);
      this.setRefreshToken(refresh);
  
      const username = response.data.username;
      this.setUsername(username);
      return username;
  
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw {
          status: error.response.status,
          data: error.response.data,
        };
      } else {
        console.error('Unexpected error occurred:', error);
        throw new Error('An unexpected error occurred');
      }
    }
  }

  logout(): void {
    this.clearTokens();
  }
}

export default new AuthService();
