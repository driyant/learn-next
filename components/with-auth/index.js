import React from "react";

const withAuth = (Component) => {
  return function withAuth(props) {
    const isLogin = false;
    if (!isLogin) {
      return <div>You have not logged in yet!</div>;
    }
    return <Component {...props} />;
  };
};

export default withAuth;
