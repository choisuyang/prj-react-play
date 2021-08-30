import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/main";

export default function Router() {
  return useRoutes([
    {
      path: "/home",
      element: <MainLayout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}
