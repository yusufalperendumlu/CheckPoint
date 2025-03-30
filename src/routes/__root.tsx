import { createRoute, createRootRoute } from "@tanstack/react-router";
import ReceptionPage from "@/views/reception/ReceptionPage";

import LoginPage from "@/views/login/LoginPage";
import RegisterPage from "@/views/register/RegisterPage";
import HomePage from "@/views/home/HomePage";
import AddEndpointPage from "@/views/addEndpoint/AddEndpointPage";

import Layout from "@/components/Layout";

const rootRoute = createRootRoute({});

const receptionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    return (
      <Layout>
        <ReceptionPage />
      </Layout>
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
    return (
      <Layout>
        <HomePage />
      </Layout>
    );
  },
});

const addEndpointRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add-endpoint",
  component: () => {
    return (
      <Layout>
        <AddEndpointPage />
      </Layout>
    );
  },
});

export const routeTree = rootRoute.addChildren([
  receptionRoute,
  loginRoute,
  registerRoute,
  homeRoute,
  addEndpointRoute,
]);
