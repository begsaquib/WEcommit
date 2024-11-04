import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./component/login";
import SignupPage from "./component/Signup";
import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./component/header";
import Home from "./component/homepage";
import ProtectedRoute from "./component/ProtectedRout";
import MemberInfoPage from "./component/teamInfoPage";

const LayoutWithHeader = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const LayoutWithoutHeader = () => <Outlet />;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithoutHeader />, 
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutWithHeader />, 
    children: [
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ), 
      },
      {
        path: "team/:teamname",
        element: (
          <ProtectedRoute>
            <MemberInfoPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
