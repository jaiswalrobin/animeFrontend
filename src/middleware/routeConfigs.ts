import { ROUTES } from './routes';
import { RouteConfig } from '../types/index';

export const routeConfigs: Record<string, RouteConfig> = {
  protected: {
    pattern: new RegExp(`^${ROUTES.USER.PROFILE}|${ROUTES.API.BASE}`),
    auth: 'required',
    verifiedEmail: true,
  },
  // Auth Routes (only for non-authenticated users)
  auth: {
    pattern: new RegExp(`^/auth(?!/pending-verification)`),
    auth: 'none',
  },
  pendingVerification: {
    pattern: new RegExp(`^${ROUTES.AUTH.PENDING_VERIFICATION}`),
    auth: 'required',
    verifiedEmail: false,
  },
  public: {
    pattern: new RegExp('^/$|^/about'),
    auth: 'optional',
  },
};
