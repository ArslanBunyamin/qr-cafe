import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import TableLogin from "./TableLogin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TableLogin />,
    },
    {
      path: "/masa1",
      element: <Home masaNo="1" />,
    },
    {
      path: "/masa2",
      element: <Home masaNo="2" />,
    },
    {
      path: "/masa3",
      element: <Home masaNo="3" />,
    },
    {
      path: "/masa4",
      element: <Home masaNo="4" />,
    },
    {
      path: "/masa5",
      element: <Home masaNo="5" />,
    },
    {
      path: "/masa6",
      element: <Home masaNo="6" />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
