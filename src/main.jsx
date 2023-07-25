import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ErrorPage } from './routes/errorPage/errorPage.jsx'

import './index.css'
import { ThemeProvider } from './components/themeContext/Theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProjectRoute } from './routes/projects/projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "projects",
        element: <ProjectRoute />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
