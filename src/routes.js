import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import AboutUsPage from "./components/AboutUsPage";
import Rates from "./components/RatesPage";
import ShopNowPage from "./components/ShopNowPage";
import { Dashboard } from "./components/layout/Dashboard";

const RoutesObjects = [
  {
    id: 1,
    path: "/",
    element: <LandingPage />,
  },
  {
    id: 2,
    path: "sign-up",
    element: <SignUpPage />,
  },
  {
    id: 3,
    path: "sign-in",
    element: <SignInPage />,
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
    element: <ShopNowPage />,
  },
];

export default RoutesObjects;
