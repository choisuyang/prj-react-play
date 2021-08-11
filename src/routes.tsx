import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}
