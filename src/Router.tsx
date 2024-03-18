import { Navigate, createBrowserRouter } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import Form from './Form';

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
  {
    path: '/create',
    element: <Form />,
  },
]);

export default router;
