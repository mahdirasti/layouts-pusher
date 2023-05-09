import "./App.css"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { HomePage } from "./Components/Pages"
//Routes
import { ROUTES } from "./Const"
//Pages
import { TelegramSidebarPage } from "./InUse"

function App() {
  //Create routes
  const router = createBrowserRouter([
    {
      path: ROUTES.Home,
      element: <HomePage />
    },
    {
      path: ROUTES.TelegramSidebar,
      element: <TelegramSidebarPage />
    }
  ])

  return (
    <div className="layouts-pusher-project">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
