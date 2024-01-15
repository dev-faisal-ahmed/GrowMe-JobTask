import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "../components/loading";
const HomePage = lazy(() => import("../pages/home/home-page"));
const PostPage = lazy(() => import("../pages/post/post-page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
]);

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
