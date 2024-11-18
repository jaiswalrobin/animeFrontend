import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request, { params }: { params: { token: string } }) {
  const { token } = params;

  try {
    const response = await axios.get(`http://localhost:3000/auth/verify-email/${token}`);
    
    if (response.data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid or expired token' });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' });
  }
}
