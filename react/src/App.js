import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { getUser, removeLoggedIn, setLoggedIn } from "./data/repository";
import { useEffect, useState } from "react";
import Movie from "./pages/movie";

function App() {
  const [user_id, setUserId] = useState(getUser());
  const [user, setUser] = useState();
  
  useEffect(() => {
    async function fetchUser() {
      const user = await getUser(user_id);
      setUser(user);
    }
    fetchUser();
  }, [user_id]);

  const loginUser = (user_id) => {
    setUserId(user_id);
    setLoggedIn(user_id);
  };

  const logoutUser = () => {
    setUserId(null);
    removeLoggedIn();
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home user={user} logoutUser={logoutUser} />}
        />
        <Route
          exact
          path="/signup"
          element={<Signup loginUser={loginUser} user={user} />}
        />
        <Route exact path="/login" element={<Login 
          loginUser={loginUser} 
          user={user} 
          setUser={setUser}
          />} />
        <Route
          exact
          path="/profile"
          element={
            <Profile
              user={user}
              setUser={setUser}
              logoutUser={logoutUser}
            />
          }
        />
        <Route
          // exact
          path="/movies/:movieName"
          element={<Movie user={user} setUser={setUser} logoutUser={logoutUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
