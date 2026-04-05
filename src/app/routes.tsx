import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Thanks } from "./pages/Thanks";
import { Admin } from "./pages/Admin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "contact", Component: Contact },
      { path: "thanks", Component: Thanks },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/admin",
    children: [
      { index: true, Component: Admin },
      { path: "dashboard", Component: AdminDashboard },
    ],
  },
]);
