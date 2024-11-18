export const ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PENDING_VERIFICATION: "/auth/pending-verification",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
  },
  USER: {
    PROFILE: "/user/*",
    SETTINGS: "/user/settings",
  },
  API: {
    BASE: "/api",
  },
  PUBLIC: {
    HOME: "/",
    ABOUT: "/about",
  },
} as const;
