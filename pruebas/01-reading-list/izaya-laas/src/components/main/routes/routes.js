import AllBooks from './AllBooks';
import MyBooks from './MyBooks';
import Recommends from './Recommends';
import Sandbox from './Sandbox';

export const ROUTES = [
  {
    name: 'All books',
    pathname: '/',
    component: AllBooks,
  },
  {
    name: 'My books',
    pathname: '/my-books',
    component: MyBooks,
  },
  {
    name: 'Recommends for you',
    pathname: '/recommends',
    component: Recommends,
  },
  {
    name: 'Sandbox',
    pathname: '/sandbox',
    component: Sandbox,
  },
];
