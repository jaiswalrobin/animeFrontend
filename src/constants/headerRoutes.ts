import { User } from "@/types";

export const headerRoutes = [
    {
        path: '/auth/login',
        label: 'Login',
        visibilityCondition: (user: User | null) => !user?.id,
        isAlwaysVisible: false
    },
    {
        path: '/auth/signup',
        label: 'Signup',
        visibilityCondition: (user: User | null) => !user?.id,
        isAlwaysVisible: false
    },
    {
        path: '/',
        label: 'Home',
        visibilityCondition: () => true,
        isAlwaysVisible: true
    }
]