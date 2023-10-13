import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { getLoggedIn, getUser, removeLoggedIn, setLoggedIn } from "./data/repository";
import { useMemo } from "react";
import Movie from "./pages/movie";
import { UserContext } from "./contexts/userContext";
import { useUser } from "./hooks/useUser";

function App() {
  // const [user_id, setUserId] = useState(getLoggedIn());
  // const [user, setUser] = useState();
  
  // useEffect(() => {
  //   async function fetchUser() {
  //     const user = await getUser(user_id);
  //     setUser(user);
  //   }
  //   fetchUser();
  // }, []);
  
  // const loginUser = (user_id) => {
  //   setUserId(user_id);
  //   setLoggedIn(user_id);
  // };
  
  // const logoutUser = () => {
  //   setUserId(null);
  //   removeLoggedIn();
  // };
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
