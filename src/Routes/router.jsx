import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddHouse from "../Pages/AddHouse/AddHouse";
import DeleteHouse from "../Pages/DeleteHouse/DeleteHouse";
import UpdateHouse from "../Pages/UpdateHouse/UpdateHouse";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/house')
      },
      {
        path: '/addHouse',
        element: <AddHouse></AddHouse>
      },
      {
        path: '/updateHouse/:id',
        element: <UpdateHouse></UpdateHouse>,
        loader: ({ params }) => fetch(`http://localhost:5000/house/${params.id}`)
      },
      {
        path: '/deleteHouse',
        element: <DeleteHouse></DeleteHouse>
      }
    ]
  },
]);

export default router;