import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import AboutUsPage from "./components/AboutUsPage";
import Rates from "./components/RatesPage";
import Ecommerce from "./components/Ecommerce";
import { Dashboard } from "./components/layout/Dashboard";
import Faqs from "./components/Faqs";
import Authentication from "./components/layout/Authentication";

// import Auth from "./components/layout/Authentication";

const RoutesObjects = [
  {
    id: 1,
    path: "/",
    element: <LandingPage />,
  },

  {
    id: 2,
    path: "/sign-in",
    element: (
      <Authentication>
        <SignInPage />
      </Authentication>
    ),
  },
  {
    id: 3,
    path: "/sign-up",
    element: (
      <Authentication>
        <SignUpPage />
      </Authentication>
    ),
  },

  {
    id: 4,
    path: "/about",
    element: (
      <Dashboard>
        <AboutUsPage />,
      </Dashboard>
    ),
  },
  {
    id: 5,
    path: "/rates",
    element: (
      <Dashboard>
        <Rates />
      </Dashboard>
    ),
  },
  {
    id: 6,
    path: "/shop",
    element: <Ecommerce />,
  },
  {
    id: 7,
    path: "/faqs",
    element: (
      <Dashboard>
        <Faqs />
      </Dashboard>
    ),
  },
  // {
  //   id: 8,
  //   path: "/authentication",
  //   element: <Authentication />,
  // },
];

export default RoutesObjects;
