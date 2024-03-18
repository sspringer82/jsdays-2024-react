import { Navigate, createBrowserRouter } from 'react-router-dom';
import List from './List';
import Detail from './Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/list" />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '/list',
    element: <List />,
  },
]);

export default router;
