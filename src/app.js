import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
