import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login";
import SignupPage from "./component/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
