import { useAtomValue } from "jotai";
import { lazy, PropsWithChildren, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login";
import { userAtom } from "./store";

const LazyTodoContainer = lazy(
  () => import("./components/TodoContainer/TodoContainer")
);
const LazyTodoList = lazy(() => import("./components/TodoList"));

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useAtomValue(userAtom);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyTodoContainer />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyTodoList />
              </Suspense>
            ),
          },
          {
            path: "/:filter",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyTodoList />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
      {
        path: "/protected",
        element: (
          <ProtectedRoute>
            <div>Protected</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
