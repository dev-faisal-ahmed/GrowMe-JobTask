import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loading } from "../components/loading";
const Home = lazy(() => import("../pages/home/home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
