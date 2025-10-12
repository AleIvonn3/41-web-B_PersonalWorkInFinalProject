import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormTemplate from "./ui/FormTemplate";
import FormHousingData from "./ui/FormHousingData";
import Contract from "./ui/FormContract";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <FormTemplate />,
      },
      {
        path: "/form/datos-de-vivienda",
        element: <FormHousingData />,
      },
      {
        path: "/form/contrato",
        element: <Contract />,
      },
    ],
  },
]);

function App() {
  // return <FormTemplate />;
  return <RouterProvider router={router} />;
}

export default App;
