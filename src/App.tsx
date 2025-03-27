import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routes/__root";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
