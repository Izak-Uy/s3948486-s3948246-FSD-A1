import { useState, useEffect } from "react";
import { getUser, getLoggedIn, setLoggedIn, removeLoggedIn } from "../data/repository";

function useUser() {
  const [user_id, setUserId] = useState(getLoggedIn());
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

  return [user, setUser, loginUser, logoutUser];
}

export { useUser };
