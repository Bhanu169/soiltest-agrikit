import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { FormStoreContext, useFormStoreState } from "./store/formStore";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const SoilTesting = lazy(() => import("./pages/SoilTesting"));
const Order = lazy(() => import("./pages/Order"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

// Page loading fallback
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground font-body">Loading…</p>
      </div>
    </div>
  );
}

// Root layout route
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

// Page routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const soilTestingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/soil-testing",
  component: SoilTesting,
});
const orderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order",
  component: Order,
});
const thankYouRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/thank-you",
  component: ThankYou,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  soilTestingRoute,
  orderRoute,
  thankYouRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// App root — wraps everything with global providers
export default function App() {
  const storeValue = useFormStoreState();

  return (
    <FormStoreContext.Provider value={storeValue}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </FormStoreContext.Provider>
  );
}
