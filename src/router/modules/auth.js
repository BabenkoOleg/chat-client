import Index from '../../views/auth/Index';
import SignIn from '../../views/auth/SignIn';

export default [
  {
    path: '/auth',
    name: 'AuthIndex',
    component: Index,
    // beforeEnter: ifNotAuthenticated,
    children: [
      {
        path: 'sign-in',
        name: 'AuthSignIn',
        component: SignIn,
      },
    ],
  },
];
