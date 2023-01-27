import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home masaNo="0" />,
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
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
