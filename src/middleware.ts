import { NextRequest, NextResponse } from 'next/server';
import { routeConfigs } from './middleware/routeConfigs';
// import { AuthUtils } from './middleware/authUtils';
import { ROUTES } from './middleware/routes';
import useAuthStore from './stores/authStore';


export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  // const token = AuthUtils.getTokenFromRequest(req);
  const user = useAuthStore.getState().user

  console.log(user, 'user-state....')
  
  // Find matching route configuration
  const matchedConfig = Object.values(routeConfigs).find(
    config => config.pattern.test(path)
  );

  if (!matchedConfig) {
    // Handle unmatched routes (could redirect to 404 or homepage)
    return NextResponse.redirect(new URL(ROUTES.PUBLIC.HOME, req.url));
  }

  // Handle authentication based on route configuration
  // switch (matchedConfig.auth) {
  //   case 'required':
  //     if (!token) {
  //       return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, req.url));
  //     }
  //     // if (!AuthUtils.validateToken(token)) {
  //     //   return NextResponse.redirect(new URL(ROUTES.AUTH.LOGIN, req.url));
  //     // }
  //     // Check email verification if required
  //     // if (matchedConfig.verifiedEmail && !AuthUtils.isEmailVerified(token)) {
  //     //   return NextResponse.redirect(new URL(ROUTES.AUTH.PENDING_VERIFICATION, req.url));
  //     // }
  //     break;

  //   case 'none':
  //     if (token) {
  //       return NextResponse.redirect(new URL(ROUTES.USER.PROFILE, req.url));
  //     }
  //     break;

  //   case 'optional':
  //     // No redirects needed, allow both authenticated and non-authenticated users
  //     break;
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|assets).*)',
  ],
};