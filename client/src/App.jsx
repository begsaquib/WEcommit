import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Import Outlet
import Login from "./component/login";
import SignupPage from "./component/Signup";
import { Provider } from "react-redux";
import store from "./utils/store";
import Header from "./component/header";
import Home from "./component/homepage";
import TeamInfo from "./component/teamInfo";

// Create the router structure
const appRouter = createBrowserRouter([
  {
    path: "/", // Root path
    element: (
      <div>
        <Header /> {/* Header will show on all pages */}
        <Outlet /> {/* This is where child routes will be rendered */}
      </div>
    ),
    children: [
      { path: "/", element: <Login /> }, // Login page
      {
        path: "signup", // Signup page path
        element: <SignupPage />,
      },
      {
        path: "/home", // Route for the home page
        element: <Home />, // Render the Home component here
      },
      {
        path: "/team/:teamName", // Route for team info with dynamic team name
        element: <TeamInfo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} /> {/* Use RouterProvider to handle routing */}
    </Provider>
  );
}

export default App;
