import "./assets/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  DashboardIcon,
  TransactionsIcon,
  AccountIcon,
  ReportIcon,
  SettingIcon,
} from "./components/layout/Nav/assets/import";
import { Account, Dashboard, Transactions, Report } from "./pages/import";
import { Default } from "./layout/Default";
import { SignIn } from "./layout/SignIn";
import { ChakraProvider } from "@chakra-ui/react";

const Approute = createBrowserRouter([
  {
    name: "SignIn",
    path: "/",
    element: <SignIn />,
    errorElement: Error,
  },
]);

const AppRoutes = createBrowserRouter([
  {
    name: "Default",
    path: "/",
    element: <Default />,
    errorElement: Error,
    children: [
      {
        name: "Dashboard",
        path: "/dashboard",
        element: <Dashboard />,
        icon: DashboardIcon,
      },
      {
        name: "Transactions",
        path: "/transactions",
        element: <Transactions />,
        icon: TransactionsIcon,
      },
      {
        name: "Account",
        path: "/account",
        element: <Account />,
        icon: AccountIcon,
      },
      {
        name: "Report",
        path: "/report",
        element: <Report />,
        icon: ReportIcon,
      },
      {
        name: "Setting",
        path: "/setting",
        icon: SettingIcon,
      },
    ],
  },
]);

export default function App() {
  return (
    <ChakraProvider>
      <div className="app">
        {true ? (
          <RouterProvider router={Approute} />
        ) : (
          <RouterProvider router={AppRoutes} />
        )}
      </div>
    </ChakraProvider>
  );
}

export { AppRoutes, Approute };
