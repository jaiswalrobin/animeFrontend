export const headerRoutes = [
    {
        path: '/auth/login',
        label: 'Login',
        isAlwaysVisible: false
    },
    {
        path: '/auth/signup',
        label: 'Signup',
        isAlwaysVisible: false
    },
    {
        path: '/',
        label: 'Home',
        isAlwaysVisible: true
    },
    {
        path: '/user/profile',
        label: 'User',
        isProtected: true,
        isAlwaysVisible: false
    }
]