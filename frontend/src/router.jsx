import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import UpdateJob from './Pages/UpdateJob'
import NotFound from './Pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
  },
  {
    path: '/jobs/:id/edit',
    element: (
      <ProtectedRoutes>
        <UpdateJob />
      </ProtectedRoutes>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router;