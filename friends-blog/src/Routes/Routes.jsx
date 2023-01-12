// import Layout from "../Views/Layout/Layout";
// import { Outlet } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";
import { ChatBubble } from "../View/Pages";


const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
    //   element: <Layout />,
      children: [
        {
          path: "/",
          element: <ChatBubble />,
        }
      ],
    },

    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return element;
};

export default Routes;