import React, { Fragment } from "react";
import classes from "./notFound.module.css";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/button";
import Navigation from "../../components/nav-bar/navigation";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main");
  };

  return (
    <Fragment>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.content}>
          <h1 className={classes.status}>{"404"}</h1>
          <p className={classes.text}>{"Page not found"}</p>
          <Button
            placeholder="back to search"
            onClick={handleClick}
            styles="goBackButton"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
