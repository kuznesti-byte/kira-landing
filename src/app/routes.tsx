import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router";

const LandingPage = lazy(() =>
  import("./pages/LandingPage").then((m) => ({ default: m.LandingPage }))
);
const AnimationsPage = lazy(() =>
  import("./pages/AnimationsPage").then((m) => ({ default: m.AnimationsPage }))
);

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7]">
      <span className="text-[#6c7179] text-sm">Загрузка…</span>
    </div>
  );
}

function withSuspense(Page: React.LazyExoticComponent<React.ComponentType>) {
  return function RouteWrapper() {
    return (
      <Suspense fallback={<PageFallback />}>
        <Page />
      </Suspense>
    );
  };
}

export const router = createHashRouter([
  { path: "/", Component: withSuspense(LandingPage) },
  { path: "/animations", Component: withSuspense(AnimationsPage) },
]);
