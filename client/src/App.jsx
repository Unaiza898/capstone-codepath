import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
