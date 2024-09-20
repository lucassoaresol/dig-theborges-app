import { httpClient } from './httpClient';

export class AuthService {
  static async verifyPhone(phone: string) {
    await httpClient.post('/auth/phone', {
      phone,
    });
  }
}
