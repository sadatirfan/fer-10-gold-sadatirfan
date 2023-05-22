import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home, Search, Result, Detail } from "./pages";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/result",
      element: <Result />,
    },
    {
      path: "/detail/",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
