import classes from "./navigation.module.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";

const Navigation = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const signOutHandler = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={classes.navigation_container}>
      <div>{user?.email}</div>
      {user ? (
        <div onClick={signOutHandler} className={classes.logOut}>
          Log out
        </div>
      ) : (
        <div>Sign In</div>
      )}
    </div>
  );
};

export default Navigation;
