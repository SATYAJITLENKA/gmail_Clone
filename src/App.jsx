import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Inbox from "./components/Inbox"
import Navbar from "./components/Navbar"
import { Starred } from "./components/Starred"
import Snoozed from "./components/Snoozed"


const router =createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Inbox/>
      },
      {
        path:'/starred',
        element:<Starred/>
      },
      {
        path:'/snoozed',
        element:<Snoozed/>
      }
    ]
  }
])
function App() {
 
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
