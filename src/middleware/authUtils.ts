import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export class AuthUtils {
  static getTokenFromRequest(req: NextRequest) {
    return cookies().get('access-token')?.value;
  }

  static isEmailVerified(token: string): boolean {
    return true; // placeholder
  }

  static validateToken(token: string): boolean {
    return true;
  }
}