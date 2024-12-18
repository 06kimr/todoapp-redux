import { lazy, PropsWithChildren, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login";
import { useSelector } from "./hooks/useRedux";
import TodoListWithQuery from "./components/TodoListWithQuery";

const LazyTodoContainer = lazy(
  () => import("./components/TodoContainer/TodoContainer")
);
const LazyTodoList = lazy(() => import("./components/TodoList"));

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useSelector((state) => state.common.user);
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
      {
        path: "/with-query",
        lazy: async () => {
          const { default: TodoContainer } = await import(
            "./components/TodoContainer/TodoContainerWithQuery"
          );
          return { Component: TodoContainer };
        },
        children: [
          {
            index: true,
            element: <TodoListWithQuery />,
          },
        ],
      },
    ],
  },
]);

export default router;
