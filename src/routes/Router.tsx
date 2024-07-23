import { useRoutes } from "react-router-dom";
import { PATHNAMES } from "../constants/routes";
import { Customers, Help, Home, Income, Product, Promote } from "../pages";
import Layout from "../components/Layout";

const ROUTES = [
  {
    element: <Layout />,
    children: [
      {
        element: <Home />,
        path: PATHNAMES.HOME,
      },
      {
        element: <Product />,
        path: PATHNAMES.PRODUCT,
      },
      {
        element: <Customers />,
        path: PATHNAMES.CUSTOMERS,
      },
      {
        element: <Income />,
        path: PATHNAMES.INCOME,
      },
      {
        element: <Help />,
        path: PATHNAMES.HELP,
      },
      {
        element: <Promote />,
        path: PATHNAMES.PROMOTE,
      },
    ],
  },
];

const AppRoutes = () => {
  return useRoutes(ROUTES);
};

export default AppRoutes;
