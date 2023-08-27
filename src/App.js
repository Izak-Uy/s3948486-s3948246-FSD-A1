import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUser, removeUser } from "./data/repository";
import { useState } from "react";
import Movie from "./pages/movie";

function App() {
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
  };

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home username={username} logoutUser={logoutUser} />}
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login loginUser={loginUser} />} />
        <Route
          exact
          path="/profile"
          element={<Profile username={username} logoutUser={logoutUser} />}
        />
        <Route 
          exact 
          path="/movie" 
          element={<Movie username={username} logoutUser={logoutUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
