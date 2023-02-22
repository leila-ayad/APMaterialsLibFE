import React, { useContext } from "react";

import AuthContext from "../../Contexts/AuthProvider";

export default function Dashboard() {
  const user = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to your dashboard {user.auth.username}</h1>
      <p>{`Hi Pearl! I hope you like this lil app I built <3`} </p>
      <br></br>
      <p>
        We can build this page out more if it makes sense to manage certain
        things from here!
      </p>
    </div>
  );
}
