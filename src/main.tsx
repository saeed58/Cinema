import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "@/components/ui/provider";
import  '../public/assets/css/iransans-rtl.css';
import { RouterProvider } from "react-router";
import router from "./routes.tsx";



const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router} />
        <ReactQueryDevtools buttonPosition="bottom-left"  />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
