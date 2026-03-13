import { createHashRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { AnimationsPage } from "./pages/AnimationsPage";

export const router = createHashRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/animations",
    Component: AnimationsPage,
  },
]);
