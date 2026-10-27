import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "./routers/router";

const root = document.getElementById("root");

if (!root) {
  throw new Error('Root element with id "root" was not found ');
}

createRoot(root).render(<RouterProvider router={router} />);
