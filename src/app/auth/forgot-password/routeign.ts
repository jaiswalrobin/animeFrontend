// // app/api/forgot-password/route.ts
// import axiosClient from '@/services/http';
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   const { email } = await request.json();

//   try {
//     console.log('ran')
//     const response = await axiosClient.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/forgot-password`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: JSON.stringify({ email }),
//     });

//     if (response.status !== 200) {
//       throw new Error('Failed to send reset password email');
//     }

//     return NextResponse.json({ message: 'Reset password email sent successfully' }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
