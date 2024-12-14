import { createBrowserRouter } from "react-router";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import MovieDetailPage from "./Pages/MovieDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "movie/:id", element: <MovieDetailPage /> },
    ],
  },
]);

export default router;
