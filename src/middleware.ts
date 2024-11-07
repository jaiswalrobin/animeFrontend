import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  
  const token = req.cookies.get('access-token');
  console.log('middleware-chala, token => ', token)
  const url = req.nextUrl.clone();
  console.log(url, 'url')

  if (!token && (!url.pathname.startsWith('/auth')) ) {
    // && (!url.pathname.startsWith('/auth') || url.pathname !== '/auth/login')
    return NextResponse.redirect(new URL('/auth/login', req.url));
  } else if (token && url.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/user/profile', req.url));
  }

  return NextResponse.next();
}

// // Define the routes you want the middleware to apply to
// export const config = {
//   matcher: ['/', '/anime/:path*', '/user-profile'],
// };
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets
     */
    '/((?!_next/static|_next/image|favicon.ico|assets).*)',
  ]
};