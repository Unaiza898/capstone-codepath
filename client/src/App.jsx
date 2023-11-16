import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Homepage, { loader as courseLoader } from "./pages/Homepage";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: courseLoader,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
