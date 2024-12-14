import { createBrowserRouter } from "react-router";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <Error/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movie/:id", element: <MovieDetailPage /> },
    ],
  },
]);

export default router;
