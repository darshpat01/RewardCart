import "./App.css";
import Home from "./Components/Home/Home";
import Root from "./Pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Earn from "./Components/Earn/Earn";
import Transactions from "./Pages/Transactions";
import Redeem from "./Pages/Redeem";
import Rules from "./Components/Rules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/earn",
        element: <Earn />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/redeem",
        element: <Redeem />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
