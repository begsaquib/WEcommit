import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./component/login";
import SignupPage from "./component/Signup";
import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./component/header";
import ProtectedRoute from "./component/ProtectedRout";
import TeamNamePage from "./component/TeamNamePage";
import MemberInfoPage from "./component/MemberInfoPage";

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
            <TeamNamePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "team/:teamname",
        element: (
          <ProtectedRoute>
            <MemberInfoPage/>
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
