import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import store from "./store";
import { Provider as StoreProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <StoreProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StoreProvider>
  );
}

export default App;
