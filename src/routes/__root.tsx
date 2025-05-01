import { createRoute, createRootRoute } from "@tanstack/react-router";
import LandingPage from "@/views/landing/LandingPage";

import LoginPage from "@/views/login/LoginPage";
import RegisterPage from "@/views/register/RegisterPage";
import HomePage from "@/views/home/HomePage";
import AddEndpointPage from "@/views/addEndpoint/AddEndpointPage";
import ListEndpointPage from "@/views/listEndpoint/ListEndpointPage";
import DetailEndpointPage from "@/views/listEndpoint/detailEnpoint/DetailEndpointPage";
import AnalysisPage from "@/views/analysis/AnalysisPage";
import PasswordResetPage from "@/views/resetPassword/ResetPasswordPage";

const rootRoute = createRootRoute({});

const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    return (
      // <Layout>
      //   <LandingPage />
      // </Layout>
      <LandingPage />
    );
  },
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => {
    return <LoginPage />;
  },
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => {
    return <RegisterPage />;
  },
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: () => {
    return <HomePage />;
  },
});

const addEndpointRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add-endpoint",
  component: () => {
    return <AddEndpointPage />;
  },
});

const listEndpointRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/list-endpoint",
  component: () => <ListEndpointPage />,
});

const detailEndpointRoute = createRoute({
  getParentRoute: () => listEndpointRoute,
  path: "detail-endpoint/$team",
  component: () => <DetailEndpointPage />,
});

const analysisEndpointRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/analysis",
  component: () => <AnalysisPage />,
});

const passwordResetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/password-reset",
  component: () => <PasswordResetPage />,
});

const listEndpointRouteWithDetail = listEndpointRoute.addChildren([
  detailEndpointRoute,
]);

export const routeTree = rootRoute.addChildren([
  landingRoute,
  loginRoute,
  registerRoute,
  homeRoute,
  addEndpointRoute,
  listEndpointRouteWithDetail,
  analysisEndpointRoute,
  passwordResetRoute,
]);

export default routeTree;
