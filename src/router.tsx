import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies",
    element: <App />,
  },
  {
    path: "/series",
    element: <App />,
  },
  {
    path: "/trends",
    element: <App />,
  },
  {
    path: "/pricing",
    element: <App />,
  },
  {
    path: "/collections",
    element: <App />,
  },
  {
    path: "/faq",
    element: <App />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
