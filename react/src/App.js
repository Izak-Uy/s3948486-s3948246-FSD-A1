import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMemo } from "react";
import Movie from "./pages/movie";
import { UserContext } from "./contexts/userContext";
import { useUser } from "./hooks/useUser";

function App() {
  const [user, setUser, loginUser, logoutUser] = useUser();
  const value = useMemo(() => [user, setUser, loginUser, logoutUser], [user, setUser, loginUser, logoutUser]);

  return (
    <Router>
      <UserContext.Provider value={value}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={<Profile />}
          />
          <Route
            // exact
            path="/movies/:movieName"
            element={<Movie />}
          />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
